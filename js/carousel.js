/**
 * Carrusel automático para la sección Recorrido
 */

(function() {
  let currentSlide = 0;
  const totalSlides = 10;
  let carouselInterval = null;
  
  /**
   * Inicializa el carrusel
   */
  function initCarousel() {
    const carousel = document.getElementById('recorridoCarousel');
    const carouselWrapper = carousel ? carousel.parentElement : null;
    const dots = document.querySelectorAll('#recorrido .carousel-dot');
    
    if (!carousel || !carouselWrapper) {
      console.warn('Elementos del carrusel no encontrados');
      return;
    }
    
    /**
     * Establece el ancho del contenedor dinámicamente
     */
    function setContainerWidth() {
      if (carouselWrapper) {
        const wrapperWidth = carouselWrapper.offsetWidth;
        carousel.style.width = `${wrapperWidth * totalSlides}px`;
      }
    }
    
    /**
     * Actualiza la posición del carrusel
     */
    function updateCarousel() {
      if (carousel && carouselWrapper) {
        const wrapperWidth = carouselWrapper.offsetWidth;
        const slideWidth = wrapperWidth;
        const translateX = -(currentSlide * slideWidth);
        carousel.style.transform = `translateX(${translateX}px)`;
      }
      
      // Actualizar indicadores
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.style.opacity = '1';
          dot.classList.add('active');
        } else {
          dot.style.opacity = '0.5';
          dot.classList.remove('active');
        }
      });
    }
    
    /**
     * Avanza al siguiente slide
     */
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }
    
    /**
     * Reinicia el intervalo del carrusel
     */
    function restartInterval() {
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
      carouselInterval = setInterval(nextSlide, 3000);
    }
    
    // Click en los dots para navegar
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
        restartInterval();
      });
    });
    
    // Actualizar en resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setContainerWidth();
        updateCarousel();
      }, 250);
    });
    
    // Inicializar
    setContainerWidth();
    updateCarousel();
    restartInterval();
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();

