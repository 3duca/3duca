# 📚 Guía de Estructura Mejorada para Páginas Educativas

## 🎯 Objetivo
Establecer una estructura consistente, organizada y visualmente atractiva para todas las secciones en las páginas educativas (programa-6-8.html, programa-9-11.html, programa-12-14.html, programa-15-17.html).

---

## 📋 Secciones Estandarizadas

### 1. ¿Qué Aprenderán?
**Estructura:**
```html
<section class="seccion-mejorada">
    <div class="section-header">
        <span class="section-icon">📚</span>
        <h2>¿Qué Aprenderán?</h2>
        <p class="section-subtitle">Descripción breve del contenido</p>
    </div>
    
    <div class="cards-grid-3col">
        <!-- Tarjeta por trimestre/módulo -->
        <div class="info-card-mejorada">
            <div class="card-icon">🎯</div>
            <h3>Módulo 1</h3>
            <p>Descripción del módulo</p>
            <ul>
                <li>Punto de aprendizaje 1</li>
                <li>Punto de aprendizaje 2</li>
                <li>Punto de aprendizaje 3</li>
            </ul>
        </div>
        <!-- Más tarjetas... -->
    </div>
</section>
```

---

### 2. Herramientas que Usamos
**Estructura:**
```html
<section class="seccion-mejorada">
    <div class="section-header">
        <span class="section-icon">🛠️</span>
        <h2>Herramientas que Usamos</h2>
        <p class="section-subtitle">Tecnología de vanguardia adaptada a su nivel</p>
    </div>
    
    <div class="cards-grid-2col">
        <!-- Software -->
        <div class="info-card-mejorada">
            <div class="card-icon">💻</div>
            <h3>Software</h3>
            <div class="card-items-list">
                <div class="card-item">
                    <span class="card-item-icon">🎮</span>
                    <div class="card-item-content">
                        <h5>Nombre de la herramienta</h5>
                        <p>Breve descripción</p>
                    </div>
                </div>
                <!-- Más items... -->
            </div>
        </div>
        
        <!-- Hardware -->
        <div class="info-card-mejorada">
            <div class="card-icon">🤖</div>
            <h3>Hardware & Robótica</h3>
            <div class="card-items-list">
                <!-- Items similares -->
            </div>
        </div>
    </div>
</section>
```

---

### 3. Información Práctica
**Estructura:**
```html
<section class="seccion-mejorada">
    <div class="section-header">
        <span class="section-icon">📅</span>
        <h2>Información Práctica</h2>
        <p class="section-subtitle">Todo lo que necesitas saber</p>
    </div>
    
    <div class="cards-grid-3col">
        <!-- Duración -->
        <div class="info-card-mejorada">
            <div class="card-icon">⏰</div>
            <h3>Duración</h3>
            <table class="tabla-info">
                <tr>
                    <td>Sesiones</td>
                    <td><strong>30 semanas</strong></td>
                </tr>
                <tr>
                    <td>Frecuencia</td>
                    <td><strong>1 vez/semana</strong></td>
                </tr>
                <tr>
                    <td>Tiempo</td>
                    <td><strong>1.5 horas</strong></td>
                </tr>
            </table>
        </div>
        
        <!-- Grupos -->
        <div class="info-card-mejorada">
            <div class="card-icon">👥</div>
            <h3>Grupos Reducidos</h3>
            <ul>
                <li>6-8 alumnos máximo</li>
                <li>2 profesores por grupo</li>
                <li>Atención personalizada</li>
            </ul>
        </div>
        
        <!-- Precio -->
        <div class="info-card-mejorada destacada">
            <div class="card-icon">💰</div>
            <h3>Inversión</h3>
            <p style="text-align: center; font-size: 2rem; color: #0066FF; margin: 1rem 0;">
                <strong>90€</strong>/mes
            </p>
            <ul>
                <li>Todo el material incluido</li>
                <li>Sin costes ocultos</li>
                <li>Certificado final</li>
            </ul>
        </div>
    </div>
</section>
```

---

### 4. Habilidades que Desarrollan
**Estructura:**
```html
<section class="seccion-mejorada">
    <div class="section-header">
        <span class="section-icon">🌟</span>
        <h2>Habilidades que Desarrollan</h2>
        <p class="section-subtitle">Crecimiento integral más allá de la tecnología</p>
    </div>
    
    <div class="cards-grid-2col">
        <!-- Habilidades Técnicas -->
        <div class="info-card-mejorada">
            <div class="card-icon">💻</div>
            <h3>Habilidades Técnicas</h3>
            <div class="card-items-list">
                <div class="card-item">
                    <span class="card-item-icon">🔧</span>
                    <div class="card-item-content">
                        <h5>Habilidad 1</h5>
                        <p>Descripción de la habilidad</p>
                    </div>
                </div>
                <!-- Más habilidades... -->
            </div>
        </div>
        
        <!-- Habilidades Sociales/Cognitivas -->
        <div class="info-card-mejorada destacada">
            <div class="card-icon">🧠</div>
            <h3>Habilidades Sociales y Cognitivas</h3>
            <div class="card-items-list">
                <!-- Items similares -->
            </div>
        </div>
    </div>
</section>
```

---

### 5. Información para las Familias
**Estructura:**
```html
<section class="seccion-mejorada">
    <div class="section-header">
        <span class="section-icon">👨‍👩‍👧</span>
        <h2>Información para las Familias</h2>
        <p class="section-subtitle">Resolvemos tus dudas principales</p>
    </div>
    
    <div class="cards-grid-2col">
        <!-- Pregunta 1 -->
        <div class="info-card-mejorada">
            <div class="card-icon">❓</div>
            <h4>¿Pregunta frecuente?</h4>
            <p>Respuesta detallada y clara para las familias.</p>
        </div>
        
        <!-- Más preguntas... -->
    </div>
    
    <!-- Box especial de beneficios -->
    <div class="info-box-especial">
        <h4>🌟 Beneficios adicionales</h4>
        <div class="tags-container">
            <span class="tag-pill">✅ Seguimiento personalizado</span>
            <span class="tag-pill">✅ Informes trimestrales</span>
            <span class="tag-pill">✅ Comunicación directa</span>
            <span class="tag-pill">✅ Proyecto final</span>
        </div>
    </div>
</section>
```

---

### 6. Ejemplos de lo que Crean
**Estructura:**
```html
<section class="seccion-mejorada">
    <div class="section-header">
        <span class="section-icon">🎨</span>
        <h2>Ejemplos de lo que Crean</h2>
        <p class="section-subtitle">Proyectos reales que tus hijos desarrollarán</p>
    </div>
    
    <div class="ejemplos-grid-mejorada">
        <!-- Proyecto 1 -->
        <div class="ejemplo-card-mejorada">
            <div class="ejemplo-card-header-mejorada">
                <div class="numero">01</div>
                <h4>Nombre del Proyecto</h4>
            </div>
            <div class="ejemplo-card-body-mejorada">
                <p>Descripción breve del proyecto y qué hace.</p>
                <h5>Lo que aprenden:</h5>
                <ul>
                    <li>Concepto 1</li>
                    <li>Concepto 2</li>
                    <li>Concepto 3</li>
                </ul>
                <div class="ejemplo-resultado">
                    <strong>Resultado:</strong> Descripción del resultado final
                </div>
            </div>
        </div>
        
        <!-- Más proyectos... -->
    </div>
</section>
```

---

### 7. Preguntas Frecuentes
**Estructura:**
```html
<section class="seccion-mejorada">
    <div class="section-header">
        <span class="section-icon">❓</span>
        <h2>Preguntas Frecuentes</h2>
        <p class="section-subtitle">Aclaramos tus últimas dudas</p>
    </div>
    
    <div class="faq-accordion">
        <!-- Pregunta 1 -->
        <div class="faq-accordion-item">
            <div class="faq-accordion-question">
                <h4>¿Pregunta frecuente completa?</h4>
                <span class="faq-accordion-icon">▼</span>
            </div>
            <div class="faq-accordion-answer">
                <p>Respuesta completa y detallada a la pregunta.</p>
            </div>
        </div>
        
        <!-- Más preguntas... -->
    </div>
</section>
```

---

## 🎨 Guía de Uso de Clases CSS

### Contenedores principales
- `.seccion-mejorada` - Contenedor principal de cada sección
- `.section-header` - Encabezado de sección (centrado)

### Grids
- `.cards-grid-2col` - Grid de 2 columnas
- `.cards-grid-3col` - Grid de 3 columnas
- `.cards-grid-4col` - Grid de 4 columnas

### Tarjetas
- `.info-card-mejorada` - Tarjeta estándar de información
- `.info-card-mejorada.destacada` - Tarjeta destacada con fondo especial

### Elementos internos de tarjetas
- `.card-icon` - Icono principal de tarjeta (emoji grande)
- `.card-items-list` - Lista de items dentro de tarjeta
- `.card-item` - Item individual con icono y contenido
- `.card-item-icon` - Icono del item
- `.card-item-content` - Contenido del item

### Elementos especiales
- `.tags-container` - Contenedor de pills/tags
- `.tag-pill` - Etiqueta pill individual
- `.info-box-especial` - Box especial con gradiente naranja/amarillo
- `.tabla-info` - Tabla de información dentro de tarjeta

### Ejemplos/Proyectos
- `.ejemplos-grid-mejorada` - Grid para ejemplos de proyectos
- `.ejemplo-card-mejorada` - Tarjeta de ejemplo
- `.ejemplo-card-header-mejorada` - Header con gradiente
- `.ejemplo-card-body-mejorada` - Cuerpo del ejemplo
- `.ejemplo-resultado` - Box de resultado del ejemplo

### FAQ Accordion
- `.faq-accordion` - Contenedor de accordion
- `.faq-accordion-item` - Item individual (añadir `.active` para expandir)
- `.faq-accordion-question` - Pregunta clickeable
- `.faq-accordion-answer` - Respuesta colapsable

---

## 🚀 Archivo CSS a Incluir

En todas las páginas educativas, añadir en el `<head>`:

```html
<link rel="stylesheet" href="../css/educacion-mejorado.css">
```

---

## 📱 Comportamiento Responsive

### Desktop (>1024px)
- Grids de 2, 3 y 4 columnas funcionan como diseñado

### Tablet (768px - 1024px)
- Grid 4 columnas → 2 columnas
- Grid 3 columnas → 2 columnas

### Mobile (<768px)
- Todas los grids → 1 columna
- Padding reducido en secciones
- Fuentes más pequeñas

---

## 📝 JavaScript para FAQ Accordion

Añadir al final del HTML o en el archivo JS:

```javascript
// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.faq-accordion-item');
    
    accordionItems.forEach(item => {
        const question = item.querySelector('.faq-accordion-question');
        
        question.addEventListener('click', () => {
            // Cerrar otros items (opcional)
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle del item actual
            item.classList.toggle('active');
        });
    });
});
```

---

## ✅ Checklist de Implementación

Para cada página educativa:

- [ ] Incluir archivo CSS `educacion-mejorado.css`
- [ ] Actualizar sección "¿Qué Aprenderán?" con `.cards-grid-3col`
- [ ] Actualizar "Herramientas que Usamos" con `.cards-grid-2col`
- [ ] Actualizar "Información Práctica" con `.cards-grid-3col`
- [ ] Actualizar "Habilidades que Desarrollan" con `.cards-grid-2col`
- [ ] Actualizar "Información para las Familias" con `.cards-grid-2col`
- [ ] Actualizar "Ejemplos de lo que Crean" con `.ejemplos-grid-mejorada`
- [ ] Actualizar "Preguntas Frecuentes" con `.faq-accordion`
- [ ] Añadir JavaScript para accordion
- [ ] Revisar responsive en móvil y tablet

---

## 🎯 Beneficios de la Nueva Estructura

✅ **Consistencia**: Todas las páginas tienen el mismo formato
✅ **Organización**: Información clara en recuadros diferenciados
✅ **Visual**: Diseño atractivo con colores y sombras
✅ **Responsive**: Perfecto en todos los dispositivos
✅ **Interactivo**: Accordion para FAQ, hover effects
✅ **Mantenible**: Clases reutilizables y bien documentadas

---

**Autor:** GitHub Copilot  
**Fecha:** 31 de Enero, 2026  
**Versión:** 2.0
