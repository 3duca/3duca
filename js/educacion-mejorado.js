// ================================================
// FUNCIONALIDAD PARA FAQ ACCORDION
// Páginas educativas mejoradas
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // === FAQ ACCORDION ===
    const accordionItems = document.querySelectorAll('.faq-accordion-item');
    
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const question = item.querySelector('.faq-accordion-question');
            
            if (question) {
                question.addEventListener('click', function() {
                    // Opcional: Cerrar otros items (accordion de un solo item abierto)
                    // Comentar estas líneas si quieres permitir múltiples items abiertos
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle del item actual
                    item.classList.toggle('active');
                });
            }
        });
    }
    
    // === SMOOTH SCROLL PARA ANCLAS EN PÁGINA ===
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces sin destino o solo #
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 100; // Altura del header fijo
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // === ANIMACIONES AL SCROLL (Opcional) ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar todas las tarjetas mejoradas
    const cards = document.querySelectorAll('.info-card-mejorada, .ejemplo-card-mejorada');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    console.log('✅ FAQ Accordion y animaciones cargados correctamente');
});
