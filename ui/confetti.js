// 🎉 Confetti Animation - Inline Style Version
// Versão simplificada que funciona com PyWebView

function showConfettiCelebration() {
  // Criar overlay
  const overlay = document.createElement('div');
  overlay.id = 'confetti-celebration';
  overlay.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      animation: fadeIn 0.3s ease;
    ">
      <div style="
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px 60px;
        border-radius: 20px;
        text-align: center;
        animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      ">
        <div style="font-size: 60px; margin-bottom: 10px;">🎉</div>
        <div style="color: white; font-size: 24px; font-weight: bold;">Ticket Resolvido!</div>
        <div style="color: rgba(255,255,255,0.8); font-size: 14px; margin-top: 8px;">Parabéns pelo trabalho!</div>
      </div>
    </div>
    <style>
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes popIn { 
        0% { transform: scale(0.5); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
    </style>
  `;
  
  document.body.appendChild(overlay);
  
  // Remover após 2 segundos
  setTimeout(() => {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';
    setTimeout(() => overlay.remove(), 300);
  }, 2000);
  
  console.log('🎉 Celebration shown!');
}

// Global instance para compatibilidade
window.confetti = {
  celebrate: showConfettiCelebration,
  basic: showConfettiCelebration,
  fireworks: showConfettiCelebration,
  burst: showConfettiCelebration
};

console.log('🎉 Confetti celebration system loaded!');
