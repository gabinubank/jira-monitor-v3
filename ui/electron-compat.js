/**
 * Camada de compatibilidade Electron -> HTTP API (PyWebView)
 */

console.log('[compat] Iniciando camada de compatibilidade...');

async function callApi(method, ...args) {
    try {
        const response = await fetch('/api/' + method, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ args })
        });
        const data = await response.json();
        if (data.error) {
            console.error('[api] Erro em ' + method + ':', data.error);
            throw new Error(data.error);
        }
        return data.result;
    } catch (e) {
        console.error('[api] Falha em ' + method + ':', e);
        throw e;
    }
}

function unpackSize(first, second) {
    if (first && typeof first === 'object' && ('width' in first || 'height' in first)) {
        return [first.width, first.height];
    }
    return [first, second];
}

window.require = function(module) {
    if (module === 'electron') {
        return {
            ipcRenderer: window._ipcRenderer,
            webFrame: window._webFrame
        };
    }
    console.warn('[compat] Módulo não suportado:', module);
    return {};
};

window._ipcRenderer = {
    on: (channel, callback) => {
        if (!window._ipcCallbacks) window._ipcCallbacks = {};
        if (!window._ipcCallbacks[channel]) window._ipcCallbacks[channel] = [];
        window._ipcCallbacks[channel].push(callback);
    },
    once: (channel, callback) => window._ipcRenderer.on(channel, callback),
    send: (channel, ...args) => {
        ipcInvoke(channel, ...args).catch(e => console.error('[ipc] send error:', e));
    },
    invoke: (channel, ...args) => ipcInvoke(channel, ...args),
    removeListener: () => {},
    removeAllListeners: (channel) => {
        if (window._ipcCallbacks) delete window._ipcCallbacks[channel];
    }
};

window._webFrame = {
    setZoomFactor: (f) => { document.body.style.zoom = f; },
    getZoomFactor: () => parseFloat(document.body.style.zoom) || 1,
    setZoomLevel: () => {}
};

async function ipcInvoke(channel, ...args) {
    const map = {
        'get-config': () => callApi('getConfig'),
        'save-config': (c) => callApi('saveConfig', c),

        'test-connection': () => callApi('testConnection'),
        'get-current-user': () => callApi('getCurrentUser'),
        'fetch-jira-stats': (cfg) => {
            const email = cfg && cfg.monitorOtherUser && cfg.otherUserEmail
                ? cfg.otherUserEmail
                : undefined;
            return callApi('fetchStats', email);
        },
        'fetch-stats': (cfgOrEmail) => {
            if (cfgOrEmail && typeof cfgOrEmail === 'object' && cfgOrEmail.otherUserEmail !== undefined) {
                const email = cfgOrEmail.monitorOtherUser && cfgOrEmail.otherUserEmail
                    ? cfgOrEmail.otherUserEmail
                    : undefined;
                return callApi('fetchStats', email);
            }
            return cfgOrEmail ? callApi('fetchStats', cfgOrEmail) : callApi('fetchStats');
        },
        'get-ticket-details': (k) => callApi('getTicketDetails', k),
        'add-comment': (d) => callApi('addComment', d.ticketKey, d.commentBody, d.isInternal, d.mentions),
        'add-worklog': (k, t, c, sd) => callApi('addWorklog', k, t, c || '', sd || null),
        'get-worklogs': (k) => callApi('getWorklogs', k),
        'update-comment': (k, cid, body, internal) => callApi('updateComment', k, cid, body, internal),
        'delete-comment': (k, cid) => callApi('deleteComment', k, cid),
        'get-transitions': (k) => callApi('getTransitions', k),
        'transition-ticket': (k, t) => callApi('transitionTicket', k, t),
        'search-jira-tickets': (q, m) => callApi('searchTickets', q, m),
        'get-ticket-sla': (k) => callApi('getTicketSla', k),
        'get-ticket-sla-batch': (keys) => callApi('getTicketSlaBatch', keys),
        'update-ticket-field': (data) => callApi('updateTicketField', data.ticketKey, data.fieldName, data.value),
        'update-ticket-fields': (ticketKey, fields) => callApi('updateTicketFields', ticketKey, fields),
        'get-ticket-edit-metadata': (k) => callApi('getTicketEditMetadata', k),
        'get-custom-field-options': (k, fid) => callApi('getCustomFieldOptions', k, fid),
        'search-users': (q, m) => callApi('searchUsers', q, m == null ? 50 : m),
        'get-current-user-account-id': () => callApi('getCurrentUserAccountId'),
        'get-assignable-users': (p) => callApi('getAssignableUsers', p),
        'fetch-mentions': () => callApi('fetchMentions'),
        'get-jira-priorities': () => callApi('getJiraPriorities'),
        'open-url': (u) => callApi('openExternal', u),
        'open-external': (u) => callApi('openExternal', u),
        'open-sim-cards-jira': (p) => callApi('openSimCardsJira', p || {}),
        'open-jira-ticket': (k) => callApi('openJiraTicket', k),
        'open-user-window': (u) => callApi('openUserWindow', u),
        'open-jira-webview': (url, key) => callApi('openJiraWebview', url, key || 'Jira'),
        'copy-to-clipboard': (t) => callApi('copyToClipboard', t),
        'show-notification': (t, b) => callApi('showNotification', t, b),
        'show-native-notification': (opts) => callApi('showNativeNotification', opts || {}),
        'test-notification': () => callApi('testNotification'),
        'check-tickets-needing-response': (h) => callApi('checkTicketsNeedingResponse', h || 2),
        'send-proactive-alerts': (h) => callApi('sendProactiveAlerts', h || 2),
        'get-tickets-without-response': (h) => callApi('getTicketsWithoutResponseSince', h || 4),
        'get-tickets-critical-sla': (m) => callApi('getTicketsWithCriticalSLA', m || 15),
        'test-download': () => callApi('testDownload'),

        'minimize-window': () => callApi('minimizeWindow'),
        'maximize-window': () => callApi('maximizeWindow'),
        'close-window': () => callApi('closeWindow'),
        'set-always-on-top': (v) => callApi('setAlwaysOnTop', v),
        'resize-window': (a, b) => {
            const [w, h] = unpackSize(a, b);
            return callApi('resizeWindow', w, h);
        },
        'center-window': (w, h) => {
            const [cw, ch] = unpackSize(w, h);
            return callApi('centerWindow', cw, ch);
        },
        'get-window-bounds': () => callApi('getWindowBounds'),
        'set-window-bounds': (b) => callApi('setWindowBounds', b),

        'update-tray': (data) => callApi('updateTray', data),
        'toggle-floating-window': () => callApi('toggleFloatingWindow'),
        'update-floating-window-config': (cfg) => callApi('updateFloatingWindowConfig', cfg),
        'get-floating-window-config': () => callApi('getFloatingWindowConfig'),
        'set-floating-window-theme': (theme) => callApi('setFloatingWindowTheme', theme),

        'get-performance-metrics': (d) => callApi('getPerformanceMetrics', d || 30),
        'get-performance-metrics-for-user': (email, days) => callApi('getPerformanceMetricsForUser', email, days || 30),
        'get-itops-team-options': () => callApi('getItopsTeamOptions'),
        'get-recent-notifications': (max) => callApi('getRecentNotifications', max || 15),
        'get-notifications': () => callApi('getNotifications'),

        'select-attachment-files': () => callApi('selectAttachmentFiles'),
        'add-attachment': (key, paths) => callApi('addAttachment', key, paths),
        'download-attachment': (id, filename) => callApi('downloadAttachment', id, filename),
        'select-and-upload-attachments': (key) => callApi('selectAndUploadAttachments', key),
        'get-attachment-url': (id) => callApi('getAttachmentUrl', id),
        'get-attachment-content': (id) => callApi('getAttachmentContent', id),

        'get-canned-responses': () => callApi('getCannedResponses'),
        'save-canned-response': (data) => callApi('saveCannedResponse', data),
        'delete-canned-response': (id, category) => callApi('deleteCannedResponse', id, category),

        'toggle-devtools': () => callApi('toggleDevtools'),
        'check-for-updates': () => callApi('checkForUpdates'),
        'perform-update': () => callApi('performUpdate'),
        'play-sound': (path) => callApi('playSound', path || ''),

        'compact-mirror-update-stats': (p) => callApi('publishMirrorStats', p || {}),
        'get-mirror-stats': () => callApi('getMirrorStats'),
    };

    const handler = map[channel];
    if (handler) {
        try {
            return await handler(...args);
        } catch (e) {
            console.error('[ipc] Erro em ' + channel + ':', e);
            return { success: false, error: e.message };
        }
    }

    console.warn('[ipc] Canal desconhecido:', channel);
    return { success: true, data: {} };
}

window.electronAPI = {
    getConfig: () => callApi('getConfig'),
    saveConfig: (c) => callApi('saveConfig', c),
    getConfigValue: (k, d) => callApi('getConfigValue', k, d),
    setConfigValue: (k, v) => callApi('setConfigValue', k, v),
    fetchStats: () => callApi('fetchStats'),
    testConnection: () => callApi('testConnection'),
    getCurrentUser: () => callApi('getCurrentUser'),
    getTicketDetails: (k) => callApi('getTicketDetails', k),
    addComment: (k, c, i) => callApi('addComment', k, c, i),
    addWorklog: (k, t, c) => callApi('addWorklog', k, t, c),
    getTransitions: (k) => callApi('getTransitions', k),
    transitionTicket: (k, t) => callApi('transitionTicket', k, t),
    openExternal: (u) => callApi('openExternal', u),
    openJiraTicket: (k) => callApi('openJiraTicket', k),
    copyToClipboard: (t) => callApi('copyToClipboard', t),
    minimizeWindow: () => callApi('minimizeWindow'),
    maximizeWindow: () => callApi('maximizeWindow'),
    closeWindow: () => callApi('closeWindow'),
    setAlwaysOnTop: (v) => callApi('setAlwaysOnTop', v),
    resizeWindow: (w, h) => callApi('resizeWindow', w, h),
    getPerformanceMetrics: () => callApi('getPerformanceMetrics'),
};

console.log('[compat] Camada de compatibilidade pronta!');
