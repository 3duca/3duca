// ================================================
// 3DUCA - PLAYFUL PROFESSIONAL INTERACTIONS
// ================================================

// Utilidades de rendimiento
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Intersection Observer para lazy loading
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            if (element.dataset.src) {
                element.src = element.dataset.src;
                element.removeAttribute('data-src');
            }
            lazyLoadObserver.unobserve(element);
        }
    });
}, {
    rootMargin: '50px'
});

// Cargar imágenes lazy
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => lazyLoadObserver.observe(img));
    
    // === NAVEGACIÓN SCROLL ===
    const navbar = document.querySelector('.navbar-fixed');
    let lastScroll = 0;
    
    const handleScroll = debounce(() => {
        const currentScroll = window.pageYOffset;
        
        // Añadir sombra al hacer scroll con mejor rendimiento
        if (currentScroll > 10) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    }, 10);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // === SMOOTH SCROLL PARA ENLACES ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // === FILTRO DE ACTIVIDADES POR EDAD ===
    const ageButtons = document.querySelectorAll('.age-btn');
    const actividadCards = document.querySelectorAll('.actividad-card');
    
    ageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            ageButtons.forEach(b => b.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            const selectedAge = this.getAttribute('data-age');
            
            // Filtrar tarjetas
            actividadCards.forEach(card => {
                const cardAges = card.getAttribute('data-age');
                
                if (selectedAge === 'all' || cardAges.includes(selectedAge)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // === SELECTOR DE DÍAS EN HORARIOS ===
    const diaButtons = document.querySelectorAll('.dia-btn');
    
    diaButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            diaButtons.forEach(b => b.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            const selectedDia = this.getAttribute('data-dia');
            
            // Aquí puedes cargar los horarios dinámicamente según el día
            // Por ahora solo mostramos un mensaje
            console.log(`Mostrando horarios para: ${selectedDia}`);
            
            // Animación de actualización
            const tabla = document.querySelector('.horarios-tabla');
            tabla.style.opacity = '0.3';
            setTimeout(() => {
                tabla.style.opacity = '1';
            }, 200);
        });
    });
    
    // === CARRUSEL DE TESTIMONIOS ===
    let currentTestimonio = 0;
    const testimonioCards = document.querySelectorAll('.testimonio-card');
    const dots = document.querySelectorAll('.dot');
    
    function showTestimonio(index) {
        // Ocultar todos los testimonios
        testimonioCards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Actualizar dots
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Click en dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonio = index;
            showTestimonio(currentTestimonio);
        });
    });
    
    // Auto-rotate testimonios cada 5 segundos
    setInterval(() => {
        currentTestimonio = (currentTestimonio + 1) % testimonioCards.length;
        showTestimonio(currentTestimonio);
    }, 5000);
    
    // Mostrar primer testimonio al cargar
    if (testimonioCards.length > 0) {
        testimonioCards.forEach((card, i) => {
            if (i !== 0) card.style.display = 'none';
        });
    }
    
    // === VALIDACIÓN FORMULARIO CON MEJOR UX ===
    const form = document.querySelector('.form-contacto');
    
    if (form) {
        // Añadir indicadores de validación en tiempo real
        const inputs = form.querySelectorAll('input[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#FF006E';
                } else {
                    this.style.borderColor = '#06FFA5';
                }
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos
            const nombre = document.getElementById('nombre-padre').value;
            const nombreHijo = document.getElementById('nombre-hijo').value;
            const edad = document.getElementById('edad').value;
            const actividad = document.getElementById('actividad').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            
            if (!nombre || !nombreHijo || !edad || !actividad || !telefono || !email) {
                alert('⚠️ Por favor, completa todos los campos obligatorios');
                return;
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('⚠️ Por favor, introduce un email válido');
                return;
            }
            
            // Validar teléfono
            const telefonoRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
            if (!telefonoRegex.test(telefono)) {
                alert('⚠️ Por favor, introduce un teléfono válido');
                return;
            }
            
            // Simular envío
            const btnSubmit = this.querySelector('.btn-submit');
            const originalText = btnSubmit.textContent;
            btnSubmit.textContent = '⏳ Enviando...';
            btnSubmit.disabled = true;
            
            setTimeout(() => {
                alert('✅ ¡Formulario enviado! Nos pondremos en contacto contigo pronto.');
                btnSubmit.textContent = originalText;
                btnSubmit.disabled = false;
                form.reset();
            }, 1500);
        });
    }
    
    // === ANIMACIÓN AL HACER SCROLL (Intersection Observer) ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos
    document.querySelectorAll('.actividad-card, .valor-card, .testimonio-card, .precio-card').forEach(el => {
        observer.observe(el);
    });
    
    // === BOTONES DE RESERVA EN HORARIOS ===
    const botonesReserva = document.querySelectorAll('.btn-reservar:not(:disabled)');
    
    botonesReserva.forEach(btn => {
        btn.addEventListener('click', function() {
            const horario = this.closest('.horario-item');
            const tiempo = horario.querySelector('.horario-tiempo').textContent;
            const actividad = horario.querySelector('.horario-actividad').textContent;
            
            // Scroll al formulario de inscripciones
            const formulario = document.getElementById('inscripciones');
            if (formulario) {
                formulario.scrollIntoView({ behavior: 'smooth' });
                
                // Pre-rellenar el formulario con la actividad seleccionada
                setTimeout(() => {
                    const actividadSelect = document.getElementById('actividad');
                    if (actividadSelect) {
                        // Detectar tipo de actividad del texto
                        if (actividad.includes('Robótica')) actividadSelect.value = 'robotica';
                        else if (actividad.includes('Arte')) actividadSelect.value = 'arte';
                        else if (actividad.includes('Música')) actividadSelect.value = 'musica';
                        else if (actividad.includes('Refuerzo')) actividadSelect.value = 'refuerzo';
                    }
                }, 500);
            }
        });
    });
    
    // === MENÚ MÓVIL ===
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // === EFECTO PARALLAX EN HERO (OPTIMIZADO) ===
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const parallaxScroll = debounce(() => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            requestAnimationFrame(() => {
                heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            });
        }, 10);
        
        window.addEventListener('scroll', parallaxScroll, { passive: true });
    }
    
    // === OPTIMIZACIÓN DEL VIDEO HERO ===
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        // Pausar video cuando no está visible
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(() => {});
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.25 });
        
        videoObserver.observe(heroVideo);
        
        // Reducir calidad en dispositivos móviles
        if (window.innerWidth < 768) {
            heroVideo.style.opacity = '0.7';
        }
    }
    
    // === CONTADOR ANIMADO EN ESTADÍSTICAS ===
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
            }
        }, 16);
    }
    
    // Activar contadores cuando sean visibles
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                entry.target.dataset.animated = 'true';
                entry.target.textContent = '0';
                animateCounter(entry.target, number);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
    
    // === EFECTO HOVER EN TARJETAS ===
    const cards = document.querySelectorAll('.actividad-card, .valor-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // === REGISTRO DEL SERVICE WORKER PARA PWA ===
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then((registration) => {
                    console.log('✅ Service Worker registrado:', registration.scope);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // Nueva versión disponible
                                if (confirm('🔄 Nueva versión disponible. ¿Recargar ahora?')) {
                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                    window.location.reload();
                                }
                            }
                        });
                    });
                })
                .catch((error) => {
                    console.log('❌ Error registrando Service Worker:', error);
                });
        });
    }
    
    // === MODAL AVISO LEGAL ===
    const modal = document.getElementById('modalAvisoLegal');
    const btnAvisoLegal = document.getElementById('btnAvisoLegal');
    const closeModal = document.querySelector('.close-modal');
    const btnCerrarModal = document.querySelector('.btn-cerrar-modal');
    
    // Abrir modal
    if (btnAvisoLegal) {
        btnAvisoLegal.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevenir scroll del body
        });
    }
    
    // Cerrar modal con X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Cerrar modal con botón
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Cerrar modal al hacer click fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // === ACORDEÓN LEGAL ===
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const isActive = this.classList.contains('active');
            
            // Cerrar todos los acordeones
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.parentElement.querySelector('.accordion-content').classList.remove('show');
            });
            
            // Si no estaba activo, abrirlo
            if (!isActive) {
                this.classList.add('active');
                accordionContent.classList.add('show');
                
                // Scroll suave hacia el item abierto después de un breve delay
                setTimeout(() => {
                    const modalContent = document.querySelector('.modal-content-legal');
                    const itemTop = accordionItem.offsetTop;
                    const headerHeight = document.querySelector('.modal-content-legal h2').offsetHeight;
                    
                    modalContent.scrollTo({
                        top: itemTop - headerHeight - 20,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        });
    });
    
    console.log('🎉 3DUCA Interactive Experience Loaded!');
});

// === EASTER EGG: Click en mascota ===
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('mascot-floating') || e.target.classList.contains('mascota-grande')) {
        e.target.style.animation = 'none';
        setTimeout(() => {
            e.target.style.animation = 'floatMascot 0.5s ease-in-out 3';
        }, 10);
    }
});
