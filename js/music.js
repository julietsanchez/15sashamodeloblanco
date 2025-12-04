/**
 * Control de música de fondo
 */

let musicInstance = null;
let muteBtnInstance = null;

/**
 * Inicializa el control de música
 */
function initMusic() {
  musicInstance = document.getElementById('bgMusic');
  muteBtnInstance = document.getElementById('muteBtn');
  
  if (!musicInstance) {
    console.warn('Elemento de música no encontrado');
    return;
  }
  
  // Manejar errores de reproducción
  musicInstance.addEventListener('error', (e) => {
    console.error('Error al reproducir música:', e);
  });
}

/**
 * Reproduce la música de fondo
 */
function playMusic() {
  if (musicInstance) {
    musicInstance.play().catch(error => {
      console.error('Error al iniciar reproducción:', error);
    });
    if (muteBtnInstance) {
      muteBtnInstance.style.display = 'block';
    }
  }
}

/**
 * Alterna el estado de mute/unmute
 */
function toggleMute() {
  if (musicInstance) {
    musicInstance.muted = !musicInstance.muted;
  }
}

// Exportar funciones para uso global
window.playMusic = playMusic;
window.toggleMute = toggleMute;
window.initMusic = initMusic;

