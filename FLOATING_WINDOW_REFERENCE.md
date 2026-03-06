# Janela Flutuante (Faróis) - Código de Referência

Este arquivo contém o código removido da janela flutuante para referência futura.

## HTML - Toggle no Header (index.html ~linha 311)

```html
<!-- Toggle Janela Flutuante -->
<div class="floating-toggle-container" id="floating-toggle-container" title="Janela Flutuante (Faróis)">
  <span class="floating-toggle-label">🪟</span>
  <label class="toggle-switch">
    <input type="checkbox" id="floating-window-toggle">
    <span class="toggle-slider"></span>
  </label>
</div>
```

## HTML - Seção de Configurações (index.html ~linha 1375)

```html
<div class="config-section-title">
  <span>🪟 Janela Flutuante (Faróis)</span>
</div>

<div class="config-group checkbox-group">
  <label>
    <input type="checkbox" id="floating-window-enabled" checked>
    <span>Ativar janela flutuante</span>
  </label>
</div>

<div id="floating-window-options">
  <div class="config-group">
    <label for="floating-window-opacity">Opacidade</label>
    <div style="display: flex; align-items: center; gap: 10px;">
      <input type="range" id="floating-window-opacity" min="0.3" max="1" step="0.1" value="0.9" style="flex: 1;">
      <span id="floating-window-opacity-value">90%</span>
    </div>
  </div>

  <div class="config-group">
    <label>Tamanho</label>
    <div style="display: flex; gap: 10px;">
      <div style="flex: 1;">
        <label style="font-size: 11px; color: #888;">Largura</label>
        <input type="number" id="floating-window-width" value="160" min="100" max="300" style="width: 100%;">
      </div>
      <div style="flex: 1;">
        <label style="font-size: 11px; color: #888;">Altura</label>
        <input type="number" id="floating-window-height" value="80" min="40" max="200" style="width: 100%;">
      </div>
    </div>
  </div>

  <div class="config-group">
    <label>Mostrar</label>
    <div class="floating-window-checkboxes" style="display: flex; flex-wrap: wrap; gap: 10px;">
      <label style="display: flex; align-items: center; gap: 4px;">
        <input type="checkbox" id="fw-show-critical" checked>
        <span style="color: #ff6b6b;">🔴 Críticos</span>
      </label>
      <label style="display: flex; align-items: center; gap: 4px;">
        <input type="checkbox" id="fw-show-warning" checked>
        <span style="color: #ffd93d;">🟡 Alerta</span>
      </label>
      <label style="display: flex; align-items: center; gap: 4px;">
        <input type="checkbox" id="fw-show-normal" checked>
        <span style="color: #6bcb77;">🟢 Normal</span>
      </label>
    </div>
  </div>

  <div class="config-group checkbox-group">
    <label>
      <input type="checkbox" id="fw-show-ticket-list">
      <span>Mostrar lista de tickets</span>
    </label>
  </div>
</div>
```

## JavaScript - Event Listeners (renderer.js)

```javascript
// Janela flutuante - toggle opções
const fwEnabledCheckbox = document.getElementById('floating-window-enabled');
if (fwEnabledCheckbox) {
  fwEnabledCheckbox.addEventListener('change', (e) => {
    const fwOptions = document.getElementById('floating-window-options');
    if (fwOptions) fwOptions.style.display = e.target.checked ? 'block' : 'none';
  });
}

// Floating window opacity slider
const fwOpacitySlider = document.getElementById('floating-window-opacity');
if (fwOpacitySlider) {
  fwOpacitySlider.addEventListener('input', (e) => {
    const value = document.getElementById('floating-window-opacity-value');
    if (value) value.textContent = Math.round(e.target.value * 100) + '%';
  });
}
```

## Config Structure

```javascript
floatingWindow: {
  enabled: document.getElementById('floating-window-enabled')?.checked ?? true,
  opacity: parseFloat(document.getElementById('floating-window-opacity')?.value) || 0.9,
  width: parseInt(document.getElementById('floating-window-width')?.value) || 160,
  height: parseInt(document.getElementById('floating-window-height')?.value) || 80,
  showCritical: document.getElementById('fw-show-critical')?.checked ?? true,
  showWarning: document.getElementById('fw-show-warning')?.checked ?? true,
  showNormal: document.getElementById('fw-show-normal')?.checked ?? true,
  showTicketList: document.getElementById('fw-show-ticket-list')?.checked ?? false
}
```

## Conceito

A janela flutuante mostrava indicadores visuais (faróis) com cores:
- 🔴 Vermelho: Tickets críticos/urgentes
- 🟡 Amarelo: Tickets em alerta/atenção
- 🟢 Verde: Tickets normais/ok

Ficava sempre visível na tela em uma janela separada pequena.
