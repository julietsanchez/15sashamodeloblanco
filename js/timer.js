/**
 * Contador regresivo (Cuenta atrás)
 */

/**
 * Inicializa el contador regresivo
 */
function initTimer() {
  const targetDate = new Date("2026-05-16T21:00:00"); // Fecha del evento
  
  /**
   * Actualiza el contador
   */
  function updateTimer() {
    const now = new Date();
    const difference = targetDate - now;
    
    // Si la fecha ya pasó, mostrar ceros
    if (difference <= 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    
    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }
  
  // Actualizar inmediatamente
  updateTimer();
  
  // Actualizar cada segundo
  setInterval(updateTimer, 1000);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTimer);
} else {
  initTimer();
}

