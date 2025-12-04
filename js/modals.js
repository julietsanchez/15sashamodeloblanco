/**
 * Gestión de modales
 */

/**
 * Abre el modal de mapa de ceremonia
 */
function openMapModal() {
  const modal = document.getElementById("mapModal");
  if (modal) {
    modal.style.display = "flex";
  }
}

/**
 * Cierra el modal de mapa (ceremonia o fiesta)
 */
function closeMapModal() {
  const modalCeremonia = document.getElementById("mapModal");
  const modalFiesta = document.getElementById("mapModalfiesta");
  
  if (modalCeremonia) {
    modalCeremonia.style.display = "none";
  }
  if (modalFiesta) {
    modalFiesta.style.display = "none";
  }
}

/**
 * Cierra el modal de confirmar asistencia
 */
function closeConfirmarModal() {
  const modalConfirmar = document.getElementById("confirmarModal");
  if (modalConfirmar) {
    modalConfirmar.style.display = "none";
  }
}

/**
 * Cierra el modal de sugerir canción
 */
function closeSugerirModal() {
  const modal = document.getElementById("sugerir");
  if (modal) {
    modal.style.display = "none";
  }
}

/**
 * Cierra el modal de regalos
 */
function closeRegalosModal() {
  const modal = document.getElementById("regalosModal");
  if (modal) {
    modal.style.display = "none";
  }
}

/**
 * Abre el modal de regalos
 */
function openRegalosModal() {
  const modal = document.getElementById("regalosModal");
  if (modal) {
    modal.style.display = "block";
  }
}

// Exportar funciones para uso global
window.openMapModal = openMapModal;
window.closeMapModal = closeMapModal;
window.closeConfirmarModal = closeConfirmarModal;
window.closeSugerirModal = closeSugerirModal;
window.closeRegalosModal = closeRegalosModal;
window.openRegalosModal = openRegalosModal;

