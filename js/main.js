/**
 * Lógica principal de la aplicación
 */

/**
 * Inicializa todos los módulos
 */
function initApp() {
  // Inicializar música
  if (typeof initMusic === 'function') {
    initMusic();
  }
}

/**
 * Maneja el inicio con música
 */
function startWithMusic() {
  const modal = document.getElementById('welcomeModal');
  if (modal) {
    modal.style.display = 'none';
  }
  
  if (typeof playMusic === 'function') {
    playMusic();
  }
  
  scrollToInicio();
}

/**
 * Maneja el inicio sin música
 */
function startWithoutMusic() {
  const modal = document.getElementById('welcomeModal');
  if (modal) {
    modal.style.display = 'none';
  }
  
  scrollToInicio();
}

/**
 * Hace scroll suave a la sección de inicio
 */
function scrollToInicio() {
  const heroSection = document.querySelector('.invitation-hero');
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Inicializa el efecto parallax para la foto del hero
 */
function initParallax() {
  const parallaxBackground = document.querySelector('.parallax-background');
  
  if (!parallaxBackground) {
    return;
  }
  
  // Crear estilo dinámico para el parallax si no existe
  if (!document.getElementById('parallax-style')) {
    const style = document.createElement('style');
    style.id = 'parallax-style';
    style.textContent = `
      .parallax-background::before {
        transform: translateY(var(--parallax-y, 0));
      }
    `;
    document.head.appendChild(style);
  }
  
  // Aplicar efecto parallax al hacer scroll
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    parallaxBackground.style.setProperty('--parallax-y', `${rate}px`);
  });
}

/**
 * Inicializa la animación floral en la sección Fiesta
 */
function initFloralAnimation() {
  const fiestaSection = document.getElementById('Fiesta');
  const floralAnim = document.getElementById('floralBackground');
  
  if (!fiestaSection || !floralAnim) {
    return;
  }
  
  window.addEventListener('scroll', function() {
    const rect = fiestaSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top < windowHeight && rect.bottom > 0) {
      floralAnim.style.opacity = '0.5';
    } else {
      floralAnim.style.opacity = '0';
    }
  });
}

/**
 * Inicializa la animación floral en la sección Cards
 */
function initFloralAnimationCards() {
  const cardsSection = document.getElementById('cards');
  const floralAnim = document.getElementById('floralBackgroundCards');
  
  if (!cardsSection || !floralAnim) {
    return;
  }
  
  window.addEventListener('scroll', function() {
    const rect = cardsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top < windowHeight && rect.bottom > 0) {
      floralAnim.style.opacity = '0.5';
    } else {
      floralAnim.style.opacity = '0';
    }
  });
}

/**
 * Inicializa la funcionalidad de copiar CBU
 */
function initCopyCBU() {
  const copyBtn = document.getElementById("copyCbuBtn");
  
  if (!copyBtn) {
    return;
  }
  
  copyBtn.addEventListener("click", function() {
    const cbu = "0720069488000005057968";
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(cbu).then(function() {
        alert("CBU copiado al portapapeles");
      }).catch(function(err) {
        console.error('Error al copiar:', err);
        alert("Error al copiar el CBU");
      });
    } else {
      // Fallback para navegadores antiguos
      const textArea = document.createElement("textarea");
      textArea.value = cbu;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        alert("CBU copiado al portapapeles");
      } catch (err) {
        console.error('Error al copiar:', err);
        alert("Error al copiar el CBU");
      }
      
      document.body.removeChild(textArea);
    }
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initApp();
    initParallax();
    initFloralAnimation();
    initFloralAnimationCards();
    initCopyCBU();
  });
} else {
  initApp();
  initParallax();
  initFloralAnimation();
  initFloralAnimationCards();
  initCopyCBU();
}

// Exportar funciones para uso global
window.startWithMusic = startWithMusic;
window.startWithoutMusic = startWithoutMusic;
window.scrollToInicio = scrollToInicio;

