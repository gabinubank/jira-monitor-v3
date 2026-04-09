/**
 * 🌍 SISTEMA DE INTERNACIONALIZAÇÃO (i18n)
 * Sistema completo de tradução para Jira Monitor
 * Idiomas suportados: pt-BR, en (inglês), es (espanhol)
 */

const i18n = {
  // ========================================
  // 🇧🇷 PORTUGUÊS (PT-BR) - DEFAULT
  // ========================================
  'pt-BR': {
    // Header
    'app.title': 'Jira Monitor',
    'header.menu': 'Menu',
    'header.notifications': 'Notificações',
    'header.docs': 'Documentação',
    'header.minimize': 'Minimizar',
    'header.close': 'Fechar',
    
    // Menu Items
    'menu.proMode': '⭐ Modo Pro',
    'menu.refresh': '🔄 Atualizar',
    'menu.settings': '⚙️ Configurações',
    'menu.okta': '🔐 OKTA',
    'menu.jamf': '🍎 JAMF',
    'menu.googleAdmin': '🔐 Google Admin Console',
    'menu.search': '🔍 Busca Rápida',
    'menu.shortcuts': '⌨️ Atalhos',
    'menu.templates': '📋 Templates',
    'menu.timer': '⏱️ Timer / Pomodoro',
    'menu.opacity': '🪟 Opacidade',
    'menu.themes': '🎨 Temas',
    'menu.language': '🌍 Idioma',
    'menu.export': '📄 Exportar',
    
    // User Monitor
    'user.monitor': 'Monitorar Usuário',
    'user.you': 'Você',
    'user.addAnother': 'Adicionar Outro Usuário...',
    
    // Stats Cards
    'stats.total': 'Total de Tickets - IT',
    'stats.support': 'Waiting for Support - IT',
    'stats.customer': 'Waiting for Customer - IT',
    'stats.pending': 'Tickets Pending - IT',
    'stats.expand': 'Expandir',
    'stats.sla': 'SLA',
    'stats.old': 'Antigos',
    
    // Pro Mode Sections
    'pro.dailyActivity': '📅 Atividade de Hoje',
    'pro.received': 'Recebidos',
    'pro.resolved': 'Fechados',
    'pro.commented': 'Atividade',
    'pro.comments': 'comentários',
    'pro.today': 'hoje',
    'pro.telefonia': 'Telefonia / SIM',
    'pro.simCards': 'Tickets SIM Cards',
    'pro.evaluated': '✅ Tickets Avaliados',
    'pro.lastEvaluated': 'Todos os Avaliados',
    'pro.byProject': '📊 Por Projeto',
    'pro.recentTickets': '🕐 Tickets Recentes',
    'pro.trend': '📈 Tendência (7 dias)',
    
    // Performance Dashboard
    'perf.title': '📊 Dashboard de Performance',
    'perf.avgTime': 'Tempo Médio',
    'perf.resolution': 'de resolução',
    'perf.resolved': 'Resolvidos',
    'perf.last30days': 'últimos 30 dias',
    'perf.perWeek': 'Por Semana',
    'perf.closeRate': 'taxa fechamento',
    'perf.byPriority': '🏷️ Por Prioridade',
    'perf.byProject': '📦 Por Projeto',
    'perf.heatmap': '🔥 Heatmap de Atividade',
    'perf.productive': 'Horários mais produtivos (últimos 30 dias)',
    'perf.last10': '📋 Últimos 10 Resolvidos',
    'perf.updateMetrics': 'Atualizar Métricas',
    
    // Timer Widget
    'timer.title': 'Timer',
    'timer.minimize': 'Minimizar',
    'timer.close': 'Fechar',
    'timer.manual': 'Manual',
    'timer.pomodoro': 'Pomodoro',
    'timer.start': 'Iniciar',
    'timer.pause': 'Pausar',
    'timer.stop': 'Parar',
    'timer.session': 'Sessão:',
    'timer.next': 'Próximo:',
    'timer.break': 'Pausa',
    'timer.worklogComment': 'Comentário do worklog (opcional)...',
    'timer.autoSave': 'Salvar worklog automaticamente',
    'timer.saveWorklog': 'Salvar Worklog no Jira',
    
    // Search
    'search.placeholder': 'Buscar ticket (ex: IT-1234) ou palavras-chave...',
    'search.quickSearch': '🔍 Buscar ticket por key, summary ou projeto...',
    'search.hint': '↑↓ para navegar • Enter para abrir • Esc para fechar',
    
    // Templates
    'templates.title': '📋 Templates de Resposta',
    'templates.create': 'Criar Novo Template',
    'templates.edit': '✏️ Editar Template',
    'templates.name': 'Nome do Template:',
    'templates.text': 'Texto:',
    'templates.internal': 'Comentário interno (visível apenas para equipe)',
    'templates.cancel': 'Cancelar',
    'templates.save': 'Salvar Template',
    'templates.hint': 'Clique em um template para usar • Cmd+Shift+T para abrir',
    
    // Notifications
    'notifications.title': 'Notificações',
    'notifications.viewAll': 'Ver Todas',
    'notifications.clear': 'Limpar',
    'notifications.reset': '🔄 Resetar',
    
    // Documentation
    'docs.title': '📚 Documentação',
    'docs.l1': 'Documentação L1',
    'docs.bpo': 'Documentação BPO',
    'docs.bpoAeBrasil': 'Guia de Suporte BPO/AE Brasil',
    
    // Daily Activity
    'daily.title': '📊 Atividade de Hoje',
    'daily.new': 'Novos',
    'daily.closed': 'Fechados',
    'daily.updated': 'Atualizados',
    'daily.receivedTitle': '🆕 Tickets Recebidos Hoje',
    'daily.resolvedTitle': '✅ Tickets Fechados Hoje',
    'daily.commentsTitle': '💬 Comentários de Hoje',
    'daily.noReceived': 'Nenhum ticket recebido hoje',
    'daily.noResolved': 'Nenhum ticket fechado hoje',
    'daily.noComments': 'Nenhum comentário hoje',
    
    // Theme Customizer
    'theme.title': '🎨 Personalizar Tema',
    'theme.accent': 'Cor de Acento:',
    'theme.presets': 'Temas Pré-definidos:',
    'theme.default': 'Padrão',
    'theme.cyberpunk': 'Cyberpunk',
    'theme.nord': 'Nord',
    'theme.dracula': 'Dracula',
    
    // Shortcuts
    'shortcuts.title': '⌨️ Atalhos de Teclado',
    'shortcuts.main': '🚀 Atalhos Principais',
    'shortcuts.openSearch': '🔍 Abrir busca rápida de tickets',
    'shortcuts.togglePro': '⭐ Alternar Modo Pro',
    'shortcuts.toggleLayout': '🔄 Alternar layout (vertical/horizontal)',
    'shortcuts.refresh': '🔄 Atualizar manualmente',
    'shortcuts.openSettings': '⚙️ Abrir configurações',
    'shortcuts.close': '❌ Fechar modais ou minimizar',
    'shortcuts.newFeatures': '✨ Novos Recursos UX',
    'shortcuts.focusMode': '🎯 Ativar/desativar Modo Focus',
    'shortcuts.export': '📄 Exportar relatório',
    'shortcuts.numeric': '🔢 Atalhos Numéricos',
    'shortcuts.card1': '📊 Abrir card Total de Tickets',
    'shortcuts.card2': '🔧 Abrir card Waiting for Support',
    'shortcuts.card3': '👤 Abrir card Waiting for Customer',
    'shortcuts.card4': '⏸️ Abrir card Tickets Pending',
    'shortcuts.searchSection': '🔍 Busca Rápida',
    'shortcuts.navigate': 'Navegar entre resultados',
    'shortcuts.open': 'Abrir ticket selecionado',
    'shortcuts.tips': '💡 Dicas',
    
    // Export
    'export.title': '📄 Exportar Relatório',
    'export.period': 'Período:',
    'export.format': 'Formato:',
    'export.include': 'Incluir:',
    'export.stats': 'Estatísticas',
    'export.tickets': 'Lista de Tickets',
    'export.trend': 'Gráfico de Tendência',
    'export.download': '📥 Baixar Relatório',
    'export.today': 'Hoje',
    'export.week': 'Esta Semana',
    'export.month': 'Este Mês',
    
    // Welcome Message (First Time)
    'welcome.title': 'Bem-vindo ao Jira Monitor!',
    'welcome.subtitle': 'Para começar, configure suas credenciais do Jira abaixo:',
    'welcome.step1': '✅ URL do Jira da sua empresa',
    'welcome.step2': '✅ Seu email corporativo',
    'welcome.step3': '✅ API Token do Jira (clique no link para criar)',
    
    // Settings
    'settings.title': '⚙️ Configurações',
    'settings.language': 'Idioma / Language / Idioma',
    'settings.languageHint': 'O tutorial interativo será exibido neste idioma',
    'settings.jiraUrl': 'URL do Jira',
    'settings.email': 'Email',
    'settings.apiToken': 'API Token',
    'settings.createApiToken': '🔗 Crie seu API token do Jira aqui',
    'settings.queueId': 'ID da Fila',
    'settings.refreshInterval': 'Intervalo de Atualização (segundos)',
    'settings.oldTicketsDays': 'Dias sem atualização para alertar',
    'settings.alertSla': 'Alertar sobre SLA próximo (1 hora antes)',
    'settings.alertOld': 'Alertar sobre tickets antigos',
    'settings.desktopNotifications': '🔔 Notificações desktop',
    'settings.test': 'Testar',
    'settings.notifyNew': '🎫 Novos tickets atribuídos',
    'settings.notifyStatus': '🔄 Mudanças de status',
    'settings.notifyReassign': '👤 Reatribuições para você',
    'settings.notifyMentions': '📢 Quando você for mencionado',
    'settings.soundNotifications': '🔊 Tocar som nas notificações',
    'settings.proMode': '⭐ Modo Pro',
    'settings.theme': '🎨 Tema da Aplicação',
    'settings.themeDefault': '🎨 Padrão (Gradiente Roxo)',
    'settings.themeDark': '🌙 Escuro (Dark Mode)',
    'settings.themeLight': '☀️ Claro (Light Mode)',
    'settings.language': '🌍 Idioma',
    'settings.save': 'Salvar',
    'settings.cancel': 'Cancelar',
    
    // Footer
    'footer.loading': 'Carregando...',
    'footer.refresh': 'Atualizar',
    'footer.lastUpdate': 'Última atualização',
    
    // Error Messages
    'error.connection': 'Erro de Conexão',
    'error.noConnection': 'Não foi possível conectar ao Jira',
    'error.retry': 'Tentar Novamente',
    'error.loading': 'Erro ao carregar ticket',
    
    // Buttons
    'btn.close': 'Fechar',
    'btn.save': 'Salvar',
    'btn.cancel': 'Cancelar',
    'btn.confirm': 'Confirmar',
    'btn.add': 'Adicionar',
    'btn.edit': 'Editar',
    'btn.delete': 'Deletar',
    'btn.retry': 'Tentar Novamente',
    
    // Add User Modal
    'addUser.title': '➕ Adicionar Usuário para Monitorar',
    'addUser.description': 'Digite o e-mail do usuário que deseja monitorar:',
    'addUser.placeholder': 'exemplo@nubank.com.br',
    'addUser.cancel': 'Cancelar',
    'addUser.add': 'Adicionar',
    
    // Context Menu
    'context.back': '⬅️ Voltar',
    'context.forward': '➡️ Avançar',
    'context.reload': '🔄 Recarregar',
    'context.cut': '✂️ Recortar',
    'context.copy': '📋 Copiar',
    'context.paste': '📄 Colar',
    'context.delete': '🗑️ Deletar',
    'context.selectAll': '🔍 Selecionar Tudo',
    'context.copyLink': '🔗 Copiar Link',
    'context.copyImage': '🖼️ Copiar Imagem',
    'context.openExternal': '🌐 Abrir Link em Navegador Externo',
    'context.inspect': '🔧 Inspecionar Elemento',
    
    // Onboarding Tour Interativo (15 passos)
    'tour.step1.title': '👋 Bem-vindo ao Jira Monitor!',
    'tour.step1.description': 'Este é um tour INTERATIVO! Você vai experimentar as funcionalidades na prática. Prepare-se para uma experiência completa! 🚀',
    'tour.step2.title': '📊 Visão Geral dos Tickets',
    'tour.step2.description': 'Aqui você vê seus contadores em tempo real: Total, Suporte, Pendentes e muito mais. Clique nos cards para expandir e ver a lista completa com cores de SLA (🟢 verde, 🟡 amarelo, 🔴 vermelho).',
    'tour.step3.title': '🔔 Notificações Ativadas!',
    'tour.step3.description': 'Você acabou de permitir notificações! 🎉 Agora receberá alertas quando: tickets mudarem de status, SLA ficar crítico ou você for mencionado.',
    'tour.step4.title': '📐 Layouts: 3 Modos Disponíveis',
    'tour.step4.description': 'O Jira Monitor tem 3 layouts: Normal (atual), Horizontal e Super Compacto (~80px de altura!). Vamos experimentar todos agora!',
    'tour.step5.title': '🎯 AÇÃO: Abra o Menu!',
    'tour.step5.description': 'Clique no botão de Menu (☰) aqui ao lado para ver as opções. Depois clique em "Próximo".',
    'tour.step6.title': '🎯 AÇÃO: Clique em "Alternar Layout"',
    'tour.step6.description': 'Clique em "Alternar Layout" (ou pressione Cmd+L) para mudar para o Layout Horizontal. O tour avança automaticamente quando você fizer isso!',
    'tour.step7.title': '🎯 AÇÃO: Pressione Cmd+L Novamente',
    'tour.step7.description': 'Pressione Cmd+L para ver o Layout Super Compacto - ideal para monitor secundário! Apenas ~80px de altura. O tour avança automaticamente!',
    'tour.step8.title': '🎯 AÇÃO: Volte ao Layout Normal',
    'tour.step8.description': 'Pressione Cmd+L mais uma vez para voltar ao Layout Normal. O tour avança automaticamente quando você fizer isso! 🎉',
    'tour.step9.title': '👨‍💻 Modo Pro: Recursos Avançados',
    'tour.step9.description': 'O Modo Pro ativa recursos avançados: editar campos, adicionar comentários, fazer upload de anexos, mencionar pessoas (@) e muito mais!',
    'tour.step10.title': '🎯 AÇÃO: Ative o Modo Pro!',
    'tour.step10.description': 'Clique em "Modo Pro" (ou pressione Cmd+P) para ativar. Veja o indicador aparecer no topo! O tour avança automaticamente quando você ativar.',
    'tour.step11.title': '🎨 Temas: Personalize Tudo',
    'tour.step11.description': 'Clique em "Personalizar Tema" para ver as opções: Dark/Light mode, presets (Cyberpunk, Nord, Dracula) e cores customizáveis. Experimente depois!',
    'tour.step12.title': '🔄 Atualização Manual',
    'tour.step12.description': 'Clique aqui para sincronizar com o Jira imediatamente. O app já atualiza automaticamente a cada 60 segundos (configurável).',
    'tour.step13.title': '🔍 Busca Rápida: Cmd+K',
    'tour.step13.description': 'Pressione Cmd+K a qualquer momento para buscar tickets por ID, título ou descrição. É instantâneo!',
    'tour.step14.title': '⌨️ Atalhos de Teclado',
    'tour.step14.description': 'Principais atalhos:\n• Cmd+K: Busca rápida\n• Cmd+L: Alternar layouts\n• Cmd+P: Modo Pro\n• Cmd+R: Atualizar dados\n• Cmd+,: Configurações\n• Cmd+T: Timer/Pomodoro',
    'tour.step15.title': '🎉 Tour Completo!',
    'tour.step15.description': 'Parabéns! Você experimentou as principais funcionalidades. Os dados do Jira vão carregar agora. Explore à vontade e boa sorte! 🚀',
    'tour.buttons.next': 'Próximo',
    'tour.buttons.previous': 'Anterior',
    'tour.buttons.done': 'Começar!',
    'tour.buttons.skip': 'Pular',
    'tour.success': '✅ Tutorial concluído! Explore à vontade.'
  },
  
  // ========================================
  // 🇺🇸 ENGLISH
  // ========================================
  'en': {
    // Header
    'app.title': 'Jira Monitor',
    'header.menu': 'Menu',
    'header.notifications': 'Notifications',
    'header.docs': 'Documentation',
    'header.minimize': 'Minimize',
    'header.close': 'Close',
    
    // Menu Items
    'menu.proMode': '⭐ Pro Mode',
    'menu.refresh': '🔄 Refresh',
    'menu.settings': '⚙️ Settings',
    'menu.okta': '🔐 OKTA',
    'menu.jamf': '🍎 JAMF',
    'menu.googleAdmin': '🔐 Google Admin Console',
    'menu.search': '🔍 Quick Search',
    'menu.shortcuts': '⌨️ Shortcuts',
    'menu.templates': '📋 Templates',
    'menu.timer': '⏱️ Timer / Pomodoro',
    'menu.opacity': '🪟 Opacity',
    'menu.themes': '🎨 Themes',
    'menu.language': '🌍 Language',
    'menu.export': '📄 Export',
    
    // User Monitor
    'user.monitor': 'Monitor User',
    'user.you': 'You',
    'user.addAnother': 'Add Another User...',
    
    // Stats Cards
    'stats.total': 'Total Tickets - IT',
    'stats.support': 'Waiting for Support - IT',
    'stats.customer': 'Waiting for Customer - IT',
    'stats.pending': 'Tickets Pending - IT',
    'stats.expand': 'Expand',
    'stats.sla': 'SLA',
    'stats.old': 'Old',
    
    // Pro Mode Sections
    'pro.dailyActivity': '📅 Today\'s Activity',
    'pro.received': 'Received',
    'pro.resolved': 'Resolved',
    'pro.commented': 'Activity',
    'pro.comments': 'comments',
    'pro.today': 'today',
    'pro.telefonia': 'Telephony / SIM',
    'pro.simCards': 'SIM Cards Tickets',
    'pro.evaluated': '✅ Evaluated Tickets',
    'pro.lastEvaluated': 'All Evaluated',
    'pro.byProject': '📊 By Project',
    'pro.recentTickets': '🕐 Recent Tickets',
    'pro.trend': '📈 Trend (7 days)',
    
    // Performance Dashboard
    'perf.title': '📊 Performance Dashboard',
    'perf.avgTime': 'Average Time',
    'perf.resolution': 'to resolution',
    'perf.resolved': 'Resolved',
    'perf.last30days': 'last 30 days',
    'perf.perWeek': 'Per Week',
    'perf.closeRate': 'close rate',
    'perf.byPriority': '🏷️ By Priority',
    'perf.byProject': '📦 By Project',
    'perf.heatmap': '🔥 Activity Heatmap',
    'perf.productive': 'Most productive hours (last 30 days)',
    'perf.last10': '📋 Last 10 Resolved',
    'perf.updateMetrics': 'Update Metrics',
    
    // Proactive Alerts
    'alerts.title': '🔔 Proactive Alerts',
    'alerts.noResponse': 'Tickets without response',
    'alerts.criticalSla': 'Critical SLA',
    'alerts.mentions': 'Mentions in comments',
    'alerts.allClear': 'All clear! No alerts at this time.',
    
    // Timer Widget
    'timer.title': 'Timer',
    'timer.minimize': 'Minimize',
    'timer.close': 'Close',
    'timer.manual': 'Manual',
    'timer.pomodoro': 'Pomodoro',
    'timer.start': 'Start',
    'timer.pause': 'Pause',
    'timer.stop': 'Stop',
    'timer.session': 'Session:',
    'timer.next': 'Next:',
    'timer.break': 'Break',
    'timer.worklogComment': 'Worklog comment (optional)...',
    'timer.autoSave': 'Save worklog automatically',
    'timer.saveWorklog': 'Save Worklog to Jira',
    
    // Search
    'search.placeholder': 'Search ticket (e.g.: IT-1234) or keywords...',
    'search.quickSearch': '🔍 Search ticket by key, summary or project...',
    'search.hint': '↑↓ to navigate • Enter to open • Esc to close',
    
    // Templates
    'templates.title': '📋 Response Templates',
    'templates.create': 'Create New Template',
    'templates.edit': '✏️ Edit Template',
    'templates.name': 'Template Name:',
    'templates.text': 'Text:',
    'templates.internal': 'Internal comment (visible to team only)',
    'templates.cancel': 'Cancel',
    'templates.save': 'Save Template',
    'templates.hint': 'Click on a template to use • Cmd+Shift+T to open',
    
    // Notifications
    'notifications.title': 'Notifications',
    'notifications.viewAll': 'View All',
    'notifications.clear': 'Clear',
    'notifications.reset': '🔄 Reset',
    
    // Documentation
    'docs.title': '📚 Documentation',
    'docs.l1': 'L1 Documentation',
    'docs.bpo': 'BPO Documentation',
    'docs.bpoAeBrasil': 'BPO/AE Brazil Support Guide',
    
    // Daily Activity
    'daily.title': '📊 Today\'s Activity',
    'daily.new': 'New',
    'daily.closed': 'Closed',
    'daily.updated': 'Updated',
    'daily.receivedTitle': '🆕 Tickets Received Today',
    'daily.resolvedTitle': '✅ Tickets Closed Today',
    'daily.commentsTitle': '💬 Today\'s Comments',
    'daily.noReceived': 'No tickets received today',
    'daily.noResolved': 'No tickets closed today',
    'daily.noComments': 'No comments today',
    
    // Theme Customizer
    'theme.title': '🎨 Customize Theme',
    'theme.accent': 'Accent Color:',
    'theme.presets': 'Predefined Themes:',
    'theme.default': 'Default',
    'theme.cyberpunk': 'Cyberpunk',
    'theme.nord': 'Nord',
    'theme.dracula': 'Dracula',
    
    // Shortcuts
    'shortcuts.title': '⌨️ Keyboard Shortcuts',
    'shortcuts.main': '🚀 Main Shortcuts',
    'shortcuts.openSearch': '🔍 Open quick ticket search',
    'shortcuts.togglePro': '⭐ Toggle Pro Mode',
    'shortcuts.toggleLayout': '🔄 Toggle layout (vertical/horizontal)',
    'shortcuts.refresh': '🔄 Refresh manually',
    'shortcuts.openSettings': '⚙️ Open settings',
    'shortcuts.close': '❌ Close modals or minimize',
    'shortcuts.newFeatures': '✨ New UX Features',
    'shortcuts.focusMode': '🎯 Enable/disable Focus Mode',
    'shortcuts.export': '📄 Export report',
    'shortcuts.numeric': '🔢 Numeric Shortcuts',
    'shortcuts.card1': '📊 Open Total Tickets card',
    'shortcuts.card2': '🔧 Open Waiting for Support card',
    'shortcuts.card3': '👤 Open Waiting for Customer card',
    'shortcuts.card4': '⏸️ Open Tickets Pending card',
    'shortcuts.searchSection': '🔍 Quick Search',
    'shortcuts.navigate': 'Navigate between results',
    'shortcuts.open': 'Open selected ticket',
    'shortcuts.tips': '💡 Tips',
    
    // Export
    'export.title': '📄 Export Report',
    'export.period': 'Period:',
    'export.format': 'Format:',
    'export.include': 'Include:',
    'export.stats': 'Statistics',
    'export.tickets': 'Ticket List',
    'export.trend': 'Trend Chart',
    'export.download': '📥 Download Report',
    'export.today': 'Today',
    'export.week': 'This Week',
    'export.month': 'This Month',
    
    // Welcome Message (First Time)
    'welcome.title': 'Welcome to Jira Monitor!',
    'welcome.subtitle': 'To get started, configure your Jira credentials below:',
    'welcome.step1': '✅ Your company\'s Jira URL',
    'welcome.step2': '✅ Your corporate email',
    'welcome.step3': '✅ Jira API Token (click the link to create one)',
    
    // Settings
    'settings.title': '⚙️ Settings',
    'settings.language': 'Language / Idioma / Idioma',
    'settings.languageHint': 'The interactive tutorial will be displayed in this language',
    'settings.jiraUrl': 'Jira URL',
    'settings.email': 'Email',
    'settings.apiToken': 'API Token',
    'settings.createApiToken': '🔗 Create your Jira API token here',
    'settings.queueId': 'Queue ID',
    'settings.refreshInterval': 'Refresh Interval (seconds)',
    'settings.oldTicketsDays': 'Days without update to alert',
    'settings.alertSla': 'Alert about upcoming SLA (1 hour before)',
    'settings.alertOld': 'Alert about old tickets',
    'settings.desktopNotifications': '🔔 Desktop notifications',
    'settings.test': 'Test',
    'settings.notifyNew': '🎫 New assigned tickets',
    'settings.notifyStatus': '🔄 Status changes',
    'settings.notifyReassign': '👤 Reassignments to you',
    'settings.notifyMentions': '📢 When you are mentioned',
    'settings.soundNotifications': '🔊 Play sound on notifications',
    'settings.proMode': '⭐ Pro Mode',
    'settings.theme': '🎨 Application Theme',
    'settings.themeDefault': '🎨 Default (Purple Gradient)',
    'settings.themeDark': '🌙 Dark (Dark Mode)',
    'settings.themeLight': '☀️ Light (Light Mode)',
    'settings.language': '🌍 Language',
    'settings.save': 'Save',
    'settings.cancel': 'Cancel',
    
    // Footer
    'footer.loading': 'Loading...',
    'footer.refresh': 'Refresh',
    'footer.lastUpdate': 'Last update',
    
    // Error Messages
    'error.connection': 'Connection Error',
    'error.noConnection': 'Could not connect to Jira',
    'error.retry': 'Try Again',
    'error.loading': 'Error loading ticket',
    
    // Buttons
    'btn.close': 'Close',
    'btn.save': 'Save',
    'btn.cancel': 'Cancel',
    'btn.confirm': 'Confirm',
    'btn.add': 'Add',
    'btn.edit': 'Edit',
    'btn.delete': 'Delete',
    'btn.retry': 'Try Again',
    
    // Add User Modal
    'addUser.title': '➕ Add User to Monitor',
    'addUser.description': 'Enter the email of the user you want to monitor:',
    'addUser.placeholder': 'example@nubank.com.br',
    'addUser.cancel': 'Cancel',
    'addUser.add': 'Add',
    
    // Context Menu
    'context.back': '⬅️ Back',
    'context.forward': '➡️ Forward',
    'context.reload': '🔄 Reload',
    'context.cut': '✂️ Cut',
    'context.copy': '📋 Copy',
    'context.paste': '📄 Paste',
    'context.delete': '🗑️ Delete',
    'context.selectAll': '🔍 Select All',
    'context.copyLink': '🔗 Copy Link',
    'context.copyImage': '🖼️ Copy Image',
    'context.openExternal': '🌐 Open Link in External Browser',
    'context.inspect': '🔧 Inspect Element',
    
    // Interactive Onboarding Tour (15 steps)
    'tour.step1.title': '👋 Welcome to Jira Monitor!',
    'tour.step1.description': 'This is an INTERACTIVE tour! You\'ll experience features hands-on. Get ready for a complete experience! 🚀',
    'tour.step2.title': '📊 Tickets Overview',
    'tour.step2.description': 'Here you see real-time counters: Total, Support, Pending, and more. Click cards to expand and view the full list with SLA colors (🟢 green, 🟡 yellow, 🔴 red).',
    'tour.step3.title': '🔔 Notifications Enabled!',
    'tour.step3.description': 'You just allowed notifications! 🎉 You\'ll now receive alerts when: tickets change status, SLA becomes critical, or you\'re mentioned.',
    'tour.step4.title': '📐 Layouts: 3 Modes Available',
    'tour.step4.description': 'Jira Monitor has 3 layouts: Normal (current), Horizontal, and Super Compact (~80px height!). Let\'s try them all now!',
    'tour.step5.title': '🎯 ACTION: Open the Menu!',
    'tour.step5.description': 'Click the Menu button (☰) here to see options. Then click "Next".',
    'tour.step6.title': '🎯 ACTION: Click "Toggle Layout"',
    'tour.step6.description': 'Click "Toggle Layout" (or press Cmd+L) to switch to Horizontal Layout. The tour advances automatically when you do it!',
    'tour.step7.title': '🎯 ACTION: Press Cmd+L Again',
    'tour.step7.description': 'Press Cmd+L to see Super Compact Layout - perfect for secondary monitors! Only ~80px height. The tour advances automatically!',
    'tour.step8.title': '🎯 ACTION: Back to Normal',
    'tour.step8.description': 'Press Cmd+L once more to return to Normal Layout. The tour advances automatically when you do it! 🎉',
    'tour.step9.title': '👨‍💻 Pro Mode: Advanced Features',
    'tour.step9.description': 'Pro Mode enables advanced features: edit fields, add comments, upload attachments, mention people (@), and more!',
    'tour.step10.title': '🎯 ACTION: Activate Pro Mode!',
    'tour.step10.description': 'Click "Pro Mode" (or press Cmd+P) to activate. Watch the indicator appear at the top! The tour advances automatically when you activate it.',
    'tour.step11.title': '🎨 Themes: Customize Everything',
    'tour.step11.description': 'Click "Customize Theme" to see options: Dark/Light mode, presets (Cyberpunk, Nord, Dracula), and custom colors. Try it later!',
    'tour.step12.title': '🔄 Manual Refresh',
    'tour.step12.description': 'Click here to sync with Jira immediately. The app auto-updates every 60 seconds (configurable).',
    'tour.step13.title': '🔍 Quick Search: Cmd+K',
    'tour.step13.description': 'Press Cmd+K anytime to search tickets by ID, title, or description. It\'s instant!',
    'tour.step14.title': '⌨️ Keyboard Shortcuts',
    'tour.step14.description': 'Main shortcuts:\n• Cmd+K: Quick search\n• Cmd+L: Toggle layouts\n• Cmd+P: Pro Mode\n• Cmd+R: Refresh data\n• Cmd+,: Settings\n• Cmd+T: Timer/Pomodoro',
    'tour.step15.title': '🎉 Tour Complete!',
    'tour.step15.description': 'Congratulations! You\'ve experienced the main features. Jira data will load now. Explore freely and good luck! 🚀',
    'tour.buttons.next': 'Next',
    'tour.buttons.previous': 'Previous',
    'tour.buttons.done': 'Let\'s Go!',
    'tour.buttons.skip': 'Skip',
    'tour.success': '✅ Tutorial completed! Feel free to explore.'
  },
  
  // ========================================
  // 🇪🇸 ESPAÑOL
  // ========================================
  'es': {
    // Header
    'app.title': 'Jira Monitor',
    'header.menu': 'Menú',
    'header.notifications': 'Notificaciones',
    'header.docs': 'Documentación',
    'header.minimize': 'Minimizar',
    'header.close': 'Cerrar',
    
    // Menu Items
    'menu.proMode': '⭐ Modo Pro',
    'menu.refresh': '🔄 Actualizar',
    'menu.settings': '⚙️ Configuración',
    'menu.okta': '🔐 OKTA',
    'menu.jamf': '🍎 JAMF',
    'menu.googleAdmin': '🔐 Google Admin Console',
    'menu.search': '🔍 Búsqueda Rápida',
    'menu.shortcuts': '⌨️ Atajos',
    'menu.templates': '📋 Plantillas',
    'menu.timer': '⏱️ Timer / Pomodoro',
    'menu.opacity': '🪟 Opacidad',
    'menu.themes': '🎨 Temas',
    'menu.language': '🌍 Idioma',
    'menu.export': '📄 Exportar',
    
    // User Monitor
    'user.monitor': 'Monitorear Usuario',
    'user.you': 'Tú',
    'user.addAnother': 'Agregar Otro Usuario...',
    
    // Stats Cards
    'stats.total': 'Total de Tickets - IT',
    'stats.support': 'Esperando Soporte - IT',
    'stats.customer': 'Esperando Cliente - IT',
    'stats.pending': 'Tickets Pendientes - IT',
    'stats.expand': 'Expandir',
    'stats.sla': 'SLA',
    'stats.old': 'Antiguos',
    
    // Pro Mode Sections
    'pro.dailyActivity': '📅 Actividad de Hoy',
    'pro.received': 'Recibidos',
    'pro.resolved': 'Cerrados',
    'pro.commented': 'Actividad',
    'pro.comments': 'comentarios',
    'pro.today': 'hoy',
    'pro.telefonia': 'Telefonía / SIM',
    'pro.simCards': 'Tickets SIM Cards',
    'pro.evaluated': '✅ Tickets Evaluados',
    'pro.lastEvaluated': 'Todos los Evaluados',
    'pro.byProject': '📊 Por Proyecto',
    'pro.recentTickets': '🕐 Tickets Recientes',
    'pro.trend': '📈 Tendencia (7 días)',
    
    // Performance Dashboard
    'perf.title': '📊 Panel de Rendimiento',
    'perf.avgTime': 'Tiempo Promedio',
    'perf.resolution': 'de resolución',
    'perf.resolved': 'Resueltos',
    'perf.last30days': 'últimos 30 días',
    'perf.perWeek': 'Por Semana',
    'perf.closeRate': 'tasa de cierre',
    'perf.byPriority': '🏷️ Por Prioridad',
    'perf.byProject': '📦 Por Proyecto',
    'perf.heatmap': '🔥 Mapa de Calor de Actividad',
    'perf.productive': 'Horarios más productivos (últimos 30 días)',
    'perf.last10': '📋 Últimos 10 Resueltos',
    'perf.updateMetrics': 'Actualizar Métricas',
    
    // Timer Widget
    'timer.title': 'Temporizador',
    'timer.minimize': 'Minimizar',
    'timer.close': 'Cerrar',
    'timer.manual': 'Manual',
    'timer.pomodoro': 'Pomodoro',
    'timer.start': 'Iniciar',
    'timer.pause': 'Pausar',
    'timer.stop': 'Parar',
    'timer.session': 'Sesión:',
    'timer.next': 'Siguiente:',
    'timer.break': 'Pausa',
    'timer.worklogComment': 'Comentario del worklog (opcional)...',
    'timer.autoSave': 'Guardar worklog automáticamente',
    'timer.saveWorklog': 'Guardar Worklog en Jira',
    
    // Search
    'search.placeholder': 'Buscar ticket (ej: IT-1234) o palabras clave...',
    'search.quickSearch': '🔍 Buscar ticket por clave, resumen o proyecto...',
    'search.hint': '↑↓ para navegar • Enter para abrir • Esc para cerrar',
    
    // Templates
    'templates.title': '📋 Plantillas de Respuesta',
    'templates.create': 'Crear Nueva Plantilla',
    'templates.edit': '✏️ Editar Plantilla',
    'templates.name': 'Nombre de la Plantilla:',
    'templates.text': 'Texto:',
    'templates.internal': 'Comentario interno (visible solo para el equipo)',
    'templates.cancel': 'Cancelar',
    'templates.save': 'Guardar Plantilla',
    'templates.hint': 'Haz clic en una plantilla para usar • Cmd+Shift+T para abrir',
    
    // Notifications
    'notifications.title': 'Notificaciones',
    'notifications.viewAll': 'Ver Todas',
    'notifications.clear': 'Limpiar',
    'notifications.reset': '🔄 Resetear',
    
    // Documentation
    'docs.title': '📚 Documentación',
    'docs.l1': 'Documentación L1',
    'docs.bpo': 'Documentación BPO',
    'docs.bpoAeBrasil': 'Guía de Soporte BPO/AE Brasil',
    
    // Daily Activity
    'daily.title': '📊 Actividad de Hoy',
    'daily.new': 'Nuevos',
    'daily.closed': 'Cerrados',
    'daily.updated': 'Actualizados',
    'daily.receivedTitle': '🆕 Tickets Recibidos Hoy',
    'daily.resolvedTitle': '✅ Tickets Cerrados Hoy',
    'daily.commentsTitle': '💬 Comentarios de Hoy',
    'daily.noReceived': 'No hay tickets recibidos hoy',
    'daily.noResolved': 'No hay tickets cerrados hoy',
    'daily.noComments': 'No hay comentarios hoy',
    
    // Theme Customizer
    'theme.title': '🎨 Personalizar Tema',
    'theme.accent': 'Color de Acento:',
    'theme.presets': 'Temas Predefinidos:',
    'theme.default': 'Predeterminado',
    'theme.cyberpunk': 'Cyberpunk',
    'theme.nord': 'Nord',
    'theme.dracula': 'Dracula',
    
    // Shortcuts
    'shortcuts.title': '⌨️ Atajos de Teclado',
    'shortcuts.main': '🚀 Atajos Principales',
    'shortcuts.openSearch': '🔍 Abrir búsqueda rápida de tickets',
    'shortcuts.togglePro': '⭐ Alternar Modo Pro',
    'shortcuts.toggleLayout': '🔄 Alternar diseño (vertical/horizontal)',
    'shortcuts.refresh': '🔄 Actualizar manualmente',
    'shortcuts.openSettings': '⚙️ Abrir configuración',
    'shortcuts.close': '❌ Cerrar modales o minimizar',
    'shortcuts.newFeatures': '✨ Nuevas Características UX',
    'shortcuts.focusMode': '🎯 Activar/desactivar Modo Foco',
    'shortcuts.export': '📄 Exportar informe',
    'shortcuts.numeric': '🔢 Atajos Numéricos',
    'shortcuts.card1': '📊 Abrir tarjeta Total de Tickets',
    'shortcuts.card2': '🔧 Abrir tarjeta Esperando Soporte',
    'shortcuts.card3': '👤 Abrir tarjeta Esperando Cliente',
    'shortcuts.card4': '⏸️ Abrir tarjeta Tickets Pendientes',
    'shortcuts.searchSection': '🔍 Búsqueda Rápida',
    'shortcuts.navigate': 'Navegar entre resultados',
    'shortcuts.open': 'Abrir ticket seleccionado',
    'shortcuts.tips': '💡 Consejos',
    
    // Export
    'export.title': '📄 Exportar Informe',
    'export.period': 'Período:',
    'export.format': 'Formato:',
    'export.include': 'Incluir:',
    'export.stats': 'Estadísticas',
    'export.tickets': 'Lista de Tickets',
    'export.trend': 'Gráfico de Tendencia',
    'export.download': '📥 Descargar Informe',
    'export.today': 'Hoy',
    'export.week': 'Esta Semana',
    'export.month': 'Este Mes',
    
    // Welcome Message (First Time)
    'welcome.title': '¡Bienvenido a Jira Monitor!',
    'welcome.subtitle': 'Para comenzar, configura tus credenciales de Jira a continuación:',
    'welcome.step1': '✅ URL de Jira de tu empresa',
    'welcome.step2': '✅ Tu correo corporativo',
    'welcome.step3': '✅ Token de API de Jira (haz clic en el enlace para crearlo)',
    
    // Settings
    'settings.title': '⚙️ Configuración',
    'settings.language': 'Idioma / Language / Idioma',
    'settings.languageHint': 'El tutorial interactivo se mostrará en este idioma',
    'settings.jiraUrl': 'URL de Jira',
    'settings.email': 'Correo Electrónico',
    'settings.apiToken': 'Token de API',
    'settings.createApiToken': '🔗 Crea tu token de API de Jira aquí',
    'settings.queueId': 'ID de Cola',
    'settings.refreshInterval': 'Intervalo de Actualización (segundos)',
    'settings.oldTicketsDays': 'Días sin actualización para alertar',
    'settings.alertSla': 'Alertar sobre SLA próximo (1 hora antes)',
    'settings.alertOld': 'Alertar sobre tickets antiguos',
    'settings.desktopNotifications': '🔔 Notificaciones de escritorio',
    'settings.test': 'Probar',
    'settings.notifyNew': '🎫 Nuevos tickets asignados',
    'settings.notifyStatus': '🔄 Cambios de estado',
    'settings.notifyReassign': '👤 Reasignaciones a ti',
    'settings.notifyMentions': '📢 Cuando te mencionen',
    'settings.soundNotifications': '🔊 Reproducir sonido en notificaciones',
    'settings.proMode': '⭐ Modo Pro',
    'settings.theme': '🎨 Tema de la Aplicación',
    'settings.themeDefault': '🎨 Predeterminado (Degradado Púrpura)',
    'settings.themeDark': '🌙 Oscuro (Modo Oscuro)',
    'settings.themeLight': '☀️ Claro (Modo Claro)',
    'settings.language': '🌍 Idioma',
    'settings.save': 'Guardar',
    'settings.cancel': 'Cancelar',
    
    // Footer
    'footer.loading': 'Cargando...',
    'footer.refresh': 'Actualizar',
    'footer.lastUpdate': 'Última actualización',
    
    // Error Messages
    'error.connection': 'Error de Conexión',
    'error.noConnection': 'No se pudo conectar a Jira',
    'error.retry': 'Intentar de Nuevo',
    'error.loading': 'Error al cargar ticket',
    
    // Buttons
    'btn.close': 'Cerrar',
    'btn.save': 'Guardar',
    'btn.cancel': 'Cancelar',
    'btn.confirm': 'Confirmar',
    'btn.add': 'Agregar',
    'btn.edit': 'Editar',
    'btn.delete': 'Eliminar',
    'btn.retry': 'Intentar de Nuevo',
    
    // Add User Modal
    'addUser.title': '➕ Agregar Usuario para Monitorear',
    'addUser.description': 'Ingresa el correo electrónico del usuario que deseas monitorear:',
    'addUser.placeholder': 'ejemplo@nubank.com.br',
    'addUser.cancel': 'Cancelar',
    'addUser.add': 'Agregar',
    
    // Context Menu
    'context.back': '⬅️ Atrás',
    'context.forward': '➡️ Adelante',
    'context.reload': '🔄 Recargar',
    'context.cut': '✂️ Cortar',
    'context.copy': '📋 Copiar',
    'context.paste': '📄 Pegar',
    'context.delete': '🗑️ Eliminar',
    'context.selectAll': '🔍 Seleccionar Todo',
    'context.copyLink': '🔗 Copiar Enlace',
    'context.copyImage': '🖼️ Copiar Imagen',
    'context.openExternal': '🌐 Abrir Enlace en Navegador Externo',
    'context.inspect': '🔧 Inspeccionar Elemento',
    
    // Tour Interactivo de Bienvenida (15 pasos)
    'tour.step1.title': '👋 ¡Bienvenido a Jira Monitor!',
    'tour.step1.description': '¡Este es un tour INTERACTIVO! Experimentarás las funcionalidades en la práctica. ¡Prepárate para una experiencia completa! 🚀',
    'tour.step2.title': '📊 Vista General de Tickets',
    'tour.step2.description': 'Aquí ves tus contadores en tiempo real: Total, Soporte, Pendientes y más. Haz clic en las tarjetas para expandir y ver la lista completa con colores de SLA (🟢 verde, 🟡 amarillo, 🔴 rojo).',
    'tour.step3.title': '🔔 ¡Notificaciones Activadas!',
    'tour.step3.description': '¡Acabas de permitir notificaciones! 🎉 Ahora recibirás alertas cuando: los tickets cambien de estado, el SLA sea crítico o te mencionen.',
    'tour.step4.title': '📐 Layouts: 3 Modos Disponibles',
    'tour.step4.description': 'Jira Monitor tiene 3 layouts: Normal (actual), Horizontal y Super Compacto (¡~80px de altura!). ¡Vamos a probarlos todos ahora!',
    'tour.step5.title': '🎯 ACCIÓN: ¡Abre el Menú!',
    'tour.step5.description': 'Haz clic en el botón de Menú (☰) aquí para ver las opciones. Luego haz clic en "Siguiente".',
    'tour.step6.title': '🎯 ACCIÓN: Haz clic en "Alternar Layout"',
    'tour.step6.description': 'Haz clic en "Alternar Layout" (o presiona Cmd+L) para cambiar al Layout Horizontal. ¡El tour avanza automáticamente cuando lo hagas!',
    'tour.step7.title': '🎯 ACCIÓN: Presiona Cmd+L de Nuevo',
    'tour.step7.description': 'Presiona Cmd+L para ver el Layout Super Compacto - ¡perfecto para monitores secundarios! Solo ~80px de altura. ¡El tour avanza automáticamente!',
    'tour.step8.title': '🎯 ACCIÓN: Vuelve al Normal',
    'tour.step8.description': 'Presiona Cmd+L una vez más para volver al Layout Normal. ¡El tour avanza automáticamente cuando lo hagas! 🎉',
    'tour.step9.title': '👨‍💻 Modo Pro: Funciones Avanzadas',
    'tour.step9.description': 'El Modo Pro activa funciones avanzadas: editar campos, agregar comentarios, subir archivos, mencionar personas (@) y mucho más!',
    'tour.step10.title': '🎯 ACCIÓN: ¡Activa el Modo Pro!',
    'tour.step10.description': 'Haz clic en "Modo Pro" (o presiona Cmd+P) para activar. ¡Verás el indicador aparecer arriba! El tour avanza automáticamente cuando lo actives.',
    'tour.step11.title': '🎨 Temas: Personaliza Todo',
    'tour.step11.description': 'Haz clic en "Personalizar Tema" para ver opciones: Dark/Light mode, presets (Cyberpunk, Nord, Dracula) y colores personalizables. ¡Pruébalo después!',
    'tour.step12.title': '🔄 Actualización Manual',
    'tour.step12.description': 'Haz clic aquí para sincronizar con Jira inmediatamente. La app se actualiza automáticamente cada 60 segundos (configurable).',
    'tour.step13.title': '🔍 Búsqueda Rápida: Cmd+K',
    'tour.step13.description': 'Presiona Cmd+K en cualquier momento para buscar tickets por ID, título o descripción. ¡Es instantáneo!',
    'tour.step14.title': '⌨️ Atajos de Teclado',
    'tour.step14.description': 'Atajos principales:\n• Cmd+K: Búsqueda rápida\n• Cmd+L: Alternar layouts\n• Cmd+P: Modo Pro\n• Cmd+R: Actualizar datos\n• Cmd+,: Configuración\n• Cmd+T: Timer/Pomodoro',
    'tour.step15.title': '🎉 ¡Tour Completo!',
    'tour.step15.description': '¡Felicitaciones! Experimentaste las funciones principales. Los datos de Jira se cargarán ahora. ¡Explora libremente y buena suerte! 🚀',
    'tour.buttons.next': 'Siguiente',
    'tour.buttons.previous': 'Anterior',
    'tour.buttons.done': '¡Empezar!',
    'tour.buttons.skip': 'Omitir',
    'tour.success': '✅ ¡Tutorial completado! Explora libremente.'
  }
};

/**
 * Obtém a tradução para uma chave específica
 * @param {string} key - Chave da tradução
 * @param {string} lang - Idioma (pt-BR, en, es)
 * @returns {string} - Texto traduzido
 */
function getTranslation(key, lang = 'pt-BR') {
  if (!i18n[lang]) {
    console.warn(`⚠️ Idioma '${lang}' não encontrado, usando pt-BR`);
    lang = 'pt-BR';
  }
  
  const translation = i18n[lang][key];
  
  if (!translation) {
    console.warn(`⚠️ Tradução não encontrada para '${key}' no idioma '${lang}'`);
    return i18n['pt-BR'][key] || key;
  }
  
  return translation;
}

/**
 * Obtém o idioma atual do localStorage
 * @returns {string} - Código do idioma (pt-BR, en, es)
 */
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'pt-BR';
}

/**
 * Define o idioma atual
 * @param {string} lang - Código do idioma (pt-BR, en, es)
 */
function setCurrentLanguage(lang) {
  if (!i18n[lang]) {
    console.warn(`⚠️ Idioma '${lang}' não suportado`);
    return;
  }
  localStorage.setItem('language', lang);
}

/**
 * Traduz um elemento HTML baseado no atributo data-i18n
 * @param {HTMLElement} element - Elemento a ser traduzido
 * @param {string} lang - Idioma
 */
function translateElement(element, lang) {
  const key = element.getAttribute('data-i18n');
  if (key) {
    const translation = getTranslation(key, lang);
    
    // Verificar se deve traduzir o placeholder
    if (element.hasAttribute('data-i18n-placeholder')) {
      element.placeholder = translation;
    }
    // Verificar se deve traduzir o title
    else if (element.hasAttribute('data-i18n-title')) {
      element.title = translation;
    }
    // Caso padrão: traduzir o textContent
    else {
      // Se o elemento tem HTML interno complexo, usar innerHTML
      if (element.querySelector('svg, img')) {
        // Manter os elementos internos e atualizar apenas o texto
        const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = translation;
        } else {
          element.innerHTML = translation + element.innerHTML;
        }
      } else {
        element.textContent = translation;
      }
    }
  }
}

/**
 * Aplica as traduções em toda a página
 * @param {string} lang - Idioma (pt-BR, en, es)
 */
function applyTranslations(lang = 'pt-BR') {
  console.log(`🌍 Aplicando traduções para: ${lang}`);
  
  // Selecionar todos os elementos com data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    translateElement(element, lang);
  });
  
  // Atualizar atributo lang do HTML
  document.documentElement.lang = lang;
  
  console.log(`✅ ${elements.length} elementos traduzidos`);
}

// Exportar funções para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    i18n,
    getTranslation,
    getCurrentLanguage,
    setCurrentLanguage,
    translateElement,
    applyTranslations
  };
}

