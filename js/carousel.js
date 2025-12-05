/**
 * Carrusel automático para la sección Recorrido
 */

(function() {
  let currentSlide = 0;
  const totalSlides = 25;
  let carouselInterval = null;
  let carousel = null;
  let carouselWrapper = null;
  let dots = null;
  
  /**
   * Inicializa el carrusel
   */
  function initCarousel() {
    carousel = document.getElementById('recorridoCarousel');
    carouselWrapper = carousel ? carousel.parentElement : null;
    dots = document.querySelectorAll('#recorrido .carousel-dot');
    
    if (!carousel || !carouselWrapper) {
      console.warn('Elementos del carrusel no encontrados');
      return;
    }
    
    /**
     * Establece el ancho del contenedor dinámicamente
     */
    function setContainerWidth() {
      if (carouselWrapper && carousel) {
        const wrapperWidth = carouselWrapper.offsetWidth || carouselWrapper.clientWidth;
        if (wrapperWidth > 0) {
          carousel.style.width = `${wrapperWidth * totalSlides}px`;
          
          // Asegurar que cada slide tenga el ancho correcto
          const slides = carousel.querySelectorAll('.carousel-slide');
          slides.forEach(slide => {
            slide.style.width = `${wrapperWidth}px`;
            slide.style.minWidth = `${wrapperWidth}px`;
            slide.style.flexShrink = '0';
            slide.style.flexGrow = '0';
            slide.style.flexBasis = `${wrapperWidth}px`;
          });
        }
      }
    }
    
    /**
     * Actualiza la posición del carrusel
     */
    function updateCarousel() {
      if (carousel && carouselWrapper) {
        const wrapperWidth = carouselWrapper.offsetWidth || carouselWrapper.clientWidth;
        if (wrapperWidth > 0) {
          const slideWidth = wrapperWidth;
          const translateX = -(currentSlide * slideWidth);
          carousel.style.transform = `translateX(${translateX}px)`;
        }
      }
      
      // Actualizar indicadores
      if (dots && dots.length > 0) {
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
    }
    
    /**
     * Avanza al siguiente slide
     */
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }
    
    /**
     * Retrocede al slide anterior
     */
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }
    
    /**
     * Reinicia el intervalo del carrusel
     */
    function restartInterval() {
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
      carouselInterval = setInterval(nextSlide, 2500);
    }
    
    // Botones de flechas
    const prevButton = document.getElementById('carouselPrev');
    const nextButton = document.getElementById('carouselNext');
    
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        prevSlide();
        restartInterval();
      });
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        nextSlide();
        restartInterval();
      });
    }
    
    // Click en los dots para navegar
    if (dots && dots.length > 0) {
      dots.forEach((dot, index) => {
        // Remover listeners anteriores si existen
        const newDot = dot.cloneNode(true);
        dot.parentNode.replaceChild(newDot, dot);
        
        newDot.addEventListener('click', () => {
          currentSlide = index;
          updateCarousel();
          restartInterval();
        });
      });
    }
    
    // Actualizar en resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setContainerWidth();
        updateCarousel();
      }, 250);
    });
    
    // Función de inicialización
    function initializeCarousel() {
      setContainerWidth();
      updateCarousel();
      restartInterval();
    }
    
    // Inicializar después de un pequeño delay
    setTimeout(initializeCarousel, 150);
    
    // También reinicializar cuando la ventana se carga completamente
    if (document.readyState === 'complete') {
      setTimeout(initializeCarousel, 300);
    } else {
      window.addEventListener('load', () => {
        setTimeout(initializeCarousel, 300);
      });
    }
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
