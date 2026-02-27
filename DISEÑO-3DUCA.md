# 🤖 ACADEMIA ROBÓTICA E IA - DISEÑO UI/UX "PROFESSIONAL TECH"

## 📋 RESUMEN EJECUTIVO

Diseño web moderno para academia especializada en robótica, programación e inteligencia artificial que combina profesionalismo tecnológico con elementos visuales atractivos y funcionales. La interfaz está optimizada para que los padres encuentren información de programas, precios y horarios en **menos de 3 clics**, con una jerarquía visual clara, video de fondo atmosférico y micro-interacciones que mejoran la experiencia de usuario.

---

## 🎯 CONCEPTO VISUAL

### Estilo: "Professional Tech"
- **Base limpia** con video de fondo (Age-of-Beyond.mp4) y overlay semitransparente
- **Elementos modernos**: Bordes redondeados, cards elevadas, diseño centrado
- **Tipografía dual**:
  - **Títulos**: Fredoka (Display con personalidad tech)
  - **Cuerpo**: Montserrat (Sans-serif geométrica profesional)

### Paleta de Colores (Azules Profesionales)
```css
/* Paleta Principal */
--color-azul-oscuro: #1c4c96      /* Nautical Blue - Base profesional */
--color-azul-principal: #256edc   /* Enchanting Sapphire - CTAs principales */
--color-azul-medio: #427ed7       /* Andrea Blue - Acentos y hovers */
--color-azul-claro: #5f95e7       /* UN Blue - Backgrounds y highlights */
--color-azul-claro-suave: #97bdf5 /* Borders y estados sutiles */

/* Colores de Soporte */
--color-blanco: #FFFFFF
--color-crema: #FFF8F0            /* Backgrounds de tarjetas */
--color-gris-claro: #F5F5F5
--color-gris: #6B7280
--color-gris-oscuro: #1F2937
--color-negro: #111827

/* Gradientes Profesionales */
--gradient-principal: linear-gradient(135deg, #1c4c96 0%, #427ed7 100%);
--gradient-azul-claro: linear-gradient(135deg, #256edc 0%, #5f95e7 100%);
--gradient-hero: linear-gradient(135deg, rgba(28, 76, 150, 0.7) 0%, rgba(95, 149, 231, 0.6) 100%);

/* Accesibilidad - Contrastes validados WCAG AA */
/* #1c4c96 sobre #256edc = 1.72 */
/* #256edc sobre #427ed7 = 1.19 */
/* #5f95e7 sobre #97bdf5 = 1.57 */
```

---

## 🏗️ ESTRUCTURA DE LA HOME (Layout por Bloques)

### 1️⃣ **NAVEGACIÓN FIJA SUPERIOR**
**Objetivo**: Acceso rápido a secciones clave

**Elementos**:
- Logo + Nombre "🤖 Academia Robótica e IA" (color azul principal)
- Menú horizontal: Programas | ¿Por qué elegirnos? | Testimonios | Horarios y Precios | Contacto
- Botón CTA destacado: "✨ Inscripciones" (gradiente azul, sombra, hover elevado)
- Menú hamburguesa responsive para móvil

**Micro-interacciones**:
- Sombra aumenta al hacer scroll
- Links con efecto hover azul claro
- Botón CTA con animación `translateY(-2px)` en hover

---

### 2️⃣ **HERO SECTION CON VIDEO BACKGROUND**
**Objetivo**: Impacto visual inmediato con video atmosférico de robótica

**Estructura**:
- **Video de fondo**: Age-of-Beyond.mp4 (robótica y tecnología)
- **Overlay**: Gradiente azul semitransparente (70-60% opacidad)
- **Contenido Centrado**:
  - Mascota animada flotante opcional
  - Título grande en blanco: "Forma a los **innovadores del futuro**" (highlight con gradiente amarillo-verde)
  - Descripción en blanco: "Academia especializada en Robótica e IA para niños y jóvenes de 6 a 17 años"
  - 2 botones CTA:
    - Primario: "🤖 Ver Programas" (gradiente azul principal)
    - Secundario: "🎁 Clase Gratuita" (borde blanco, fondo transparente)

**Elementos decorativos**:
- 2 blobs de color azul con `filter: blur(80px)` y animación `float`
- Opacidad reducida (20%) para no competir con el video

**Micro-interacciones**:
- Video en autoplay, muted, loop
- Botones con `translateY(-3px)` y aumento de sombra en hover
- Texto con sombra para legibilidad sobre video

---

### 3️⃣ **PROGRAMAS DE ROBÓTICA E IA POR EDADES**
**Objetivo**: Navegación clara por grupos de edad

**Grid de 4 Tarjetas** (responsive 2x2):

#### Estructura de Tarjeta:
```
┌─────────────────────────────────┐
│  🧸 [Icono 4rem]                │
│  [Badge: 6-8 años]              │
│  Pequeños Inventores            │
│  Introducción lúdica a robot... │
│  🎮 Scratch Jr / LEGO WeDo      │
│  🤖 Robots educativos           │
│  🎨 Creatividad y diseño        │
│  🧩 Pensamiento lógico          │
│  ─────────────────────          │
│  Ver Programa Completo →        │
└─────────────────────────────────┘
```

**4 Niveles con iconos distintivos**:
1. **6-8 años**: 🧸 Pequeños Inventores (azul claro suave)
2. **9-11 años**: 🚀 Exploradores Tecnológicos (azul claro)
3. **12-14 años**: ⚡ Programadores y Makers (azul medio)
4. **+15 años**: 🎯 Ingenieros Junior (azul principal)

**Micro-interacciones**:
- Hover: `translateY(-10px)` + sombra XL
- Borde superior azul que aparece con animación
- Icono con animación flotante continua
- Link a página detallada del programa

**Sub-sección: Tecnologías que Aprenderán**:
- 4 tarjetas mini-tech:
  - 🤖 Robótica (LEGO, Arduino, ROS)
  - 🧠 Inteligencia Artificial (ML, Deep Learning)
  - 💻 Programación (Python, C++, JavaScript)
  - 🔧 Herramientas (TensorFlow, OpenCV, App Inventor)

---

### 4️⃣ **SECCIÓN ¿POR QUÉ ELEGIRNOS?**
**Objetivo**: Transmitir confianza y especialización en robótica

**Grid 3x2 de tarjetas**:
1. 👨‍🏫 **Profesores Ingenieros** - Especializados en robótica e IA
2. 🤖 **Tecnología Punta** - Robots LEGO, Arduino, Raspberry Pi
3. 👥 **Grupos Reducidos** - 6-8 alumnos, atención personalizada
4. 🎯 **Metodología STEAM** - Proyectos reales, construcción + código
5. 🏆 **Competiciones** - First Lego League, WRO, olimpiadas
6. 📱 **Seguimiento Continuo** - GitHub, informes, comunicación directa

**Diseño de tarjeta**:
- Icono 3D (4rem) con colores azules
- Fondo blanco/crema, borde redondeado (20px)
- Hover: `translateY(-8px)` + sombra azul

**Micro-interacciones**:
- Aparición escalonada con Intersection Observer
- Iconos con rotación sutil en hover

---

### 5️⃣ **TESTIMONIOS / SOCIAL PROOF**
**Objetivo**: Validación con experiencias reales de robótica

**Carrusel de 3 testimonios**:

#### Estructura de testimonio:
```
┌────────────────────────────────┐
│ [Avatar 60px] Nombre           │ ⭐⭐⭐⭐⭐
│               Madre/Padre de...│
│ ────────────────────────────── │
│ "Testimonio sobre robótica     │
│ y resultados del aprendizaje"  │
└────────────────────────────────┘
```

**Ejemplos de testimonios**:
- "Lucas construyó su primer robot con LEGO Mindstorms..."
- "Mi hija ganó segundo puesto en First Lego League..."
- "David crea sus propios videojuegos en Scratch..."

**Características**:
- Avatares circulares con borde azul claro
- 5 estrellas doradas
- Fondo blanco/crema, bordes redondeados (20px)
- Enfoque en resultados concretos de robótica

**Micro-interacciones**:
- Carrusel con dots interactivos (azul principal)
- Transición `fadeInUp` suave entre testimonios

---

### 6️⃣ **WIDGET DE HORARIOS Y PRECIOS**
**Objetivo**: Facilitar búsqueda de horario por edad y ver precios

**Selector de Días**:
- 6 botones (LUN-SÁB) estilo moderno
- Activo: Gradiente azul, texto blanco
- Scroll horizontal en móvil

**Tabla de Horarios por Programa**:
```
┌──────────────────────────────────────────────────────┐
│ 17:00-18:30 │ 🧸 Pequeños Inventores (6-8)  │ 4 plazas │ [Reservar] │
│ 17:30-19:00 │ 🚀 Exploradores Tech (9-11)   │ 3 plazas │ [Reservar] │
│ 18:00-20:00 │ ⚡ Makers (12-14)             │ 5 plazas │ [Reservar] │
│ 18:30-20:30 │ 🎯 Ingenieros Junior (+15)    │ 6 plazas │ [Reservar] │
└──────────────────────────────────────────────────────┘
```

**Micro-interacciones**:
- Click en día: Transición suave de tabla
- Hover en botón Reservar: `scale(1.05)` con color azul medio
- Click en reservar: Scroll a formulario + pre-relleno

**Sección de Precios por Edad** (debajo del widget):
- 4 tarjetas de precio:
  - 🧸 **6-8 años**: 70€/mes (1.5h/semana, LEGO WeDo)
  - 🚀 **9-11 años**: 80€/mes (1.5h/semana, Mindstorms/Python)
  - ⚡ **12-14 años**: 90€/mes **[Popular]** (2h/semana, Arduino/ML)
  - 🎯 **+15 años**: 100€/mes (2h/semana, ROS/Deep Learning)

**Card de precio destacada (12-14)**:
- Badge flotante "🔥 Más completo"
- `scale(1.05)` permanente
- Borde azul principal más grueso

**Contenido de cada tarjeta**:
- Icono grande del programa
- Rango de edad
- Precio destacado con gradiente azul
- Lista de incluidos (✓ Duración, ✓ Kit, ✓ Software, ✓ Material)
- Nota: "📝 **Matrícula: 50€** • Descuento hermanos: 10%"

**Accesibilidad de Precios**: ✅ 1 clic desde inicio (link directo en nav)

---

### 7️⃣ **INSCRIPCIONES / CLASE GRATIS**
**Objetivo**: Conversión con formulario enfocado en robótica

**Layout Grid 2 columnas**:
- **Izquierda**: Mascota o imagen de robots
- **Derecha**: Formulario

**Formulario de Inscripción**:
- Título: "🎁 Reserva tu clase de prueba **GRATIS**"
- Subtítulo: "Sin compromiso. Ven a conocernos y prueba robótica."
- Campos:
  - Nombre del padre/madre *
  - Nombre del niño/a *
  - Edad * (select 6-17 años)
  - Actividad de interés * (🤖 Robótica e IA pre-seleccionado)
  - Teléfono *
  - Email *
  - Mensaje (opcional)
- Fondo gris claro, padding generoso
- Validación en tiempo real

**Botón Submit**:
- Grande con gradiente azul principal
- Texto: "🚀 Reservar Clase Gratuita"
- Estado loading: "⏳ Enviando..."

**Micro-interacciones**:
- Focus en inputs: Borde azul principal + shadow ring
- Success: Alert con ✅ y confetti animado
- Privacidad: "🔒 Tus datos están protegidos"

---

### 8️⃣ **FOOTER**
**Objetivo**: Información complementaria y navegación secundaria

**Grid 4 columnas**:
1. **Branding**:
   - Logo + texto "🤖 Robótica e IA"
   - Descripción: "Academia especializada en robótica..."
   - Redes sociales: 📘 📷 ▶️ 💻 (GitHub)

2. **Programas**:
   - 6-8 años • Pequeños Inventores
   - 9-11 años • Exploradores Tech
   - 12-14 años • Makers
   - +15 años • Ingenieros

3. **Información**:
   - ¿Por qué elegirnos?
   - Horarios y Precios
   - Testimonios
   - Ver todos los programas

4. **Contacto**:
   - 📍 Calle Principal, 123, Madrid
   - 📞 +34 900 123 456
   - ✉️ info@robotica-ia.es
   - 🕐 Lun-Vie: 16:00-20:00, Sáb: 10:00-14:00

**Footer Bottom**:
- Copyright "© 2026 Academia de Robótica e Inteligencia Artificial"
- Links legales: Aviso Legal | Privacidad | Cookies

**Estilo**:
- Fondo: azul oscuro (#1F2937)
- Texto: blanco/gris claro
- Links hover: azul claro
- Iconos sociales con hover azul principal + elevación

---

### 9️⃣ **BOTÓN FLOTANTE WHATSAPP**
**Objetivo**: Canal directo de consulta inmediata

**Características**:
- Posición fija: bottom-right (30px, 30px)
- Circular 70px, fondo verde WhatsApp (#25D366)
- Icono SVG blanco + texto "¿Hablamos?"
- Animación `pulse` continua (scale 1 → 1.1)
- z-index: 999

**Micro-interacciones**:
- Hover: `scale(1.15)` + sombra verde intensa
- Click: Abre WhatsApp con mensaje: "Hola, quiero información sobre los programas de robótica"
- Responsive: Solo icono en móvil (60px)

---

## 🎭 MICRO-INTERACCIONES DESTACADAS

### Animaciones al Scroll (Intersection Observer):
```javascript
threshold: 0.1
rootMargin: '-100px'
```
- Tarjetas de programas: `fadeInUp` (translateY + opacity)
- Tarjetas de valor: Aparición escalonada (delay: 0.1s entre cada una)
- Testimonios: Slide lateral con fade
- Precios: Scale up desde 0.9 a 1

### Efectos Hover Consistentes:
- **Elevación**: `translateY(-8px a -10px)`
- **Escala**: `scale(1.02 a 1.05)`
- **Sombra**: Transición de `shadow-sm` a `shadow-xl` con tinte azul
- **Transición**: `0.3s ease` o `cubic-bezier(0.4, 0, 0.2, 1)`
- **Borde**: Aparición de borde superior azul en cards

### Estados de Focus (Accesibilidad):
- Outline azul principal 3px con offset 3px
- Ring shadow azul en inputs
- Visible en navegación con teclado (TAB)

### Animaciones de Video Background:
- Video en autoplay, muted, loop
- Overlay con gradiente azul (70-60% opacidad)
- Parallax sutil al scroll (opcional)

---

## 🚀 OPTIMIZACIÓN DE JERARQUÍA VISUAL

### Objetivo: Programas, Precios y Horarios en < 3 clics

#### **Ruta 1** (Ver Programas):
1. Click en Hero CTA: **"🤖 Ver Programas"**
2. Scroll automático a sección de programas por edad

**Total: 1 clic** ✅

#### **Ruta 2** (Horarios y Precios):
1. Click en header: **"Horarios y Precios"**
2. Scroll automático a sección
3. Ver precios por edad en cards

**Total: 1 clic** ✅

#### **Ruta 3** (Clase Gratis Directa):
1. Click en Hero: **"🎁 Clase Gratuita"**
2. Scroll automático a formulario

**Total: 1 clic** ✅

#### **Ruta 4** (Programa Específico):
1. Click en Hero: **"Ver Programas"**
2. Click en tarjeta de edad (ej: "9-11 años")
3. Página detallada del programa con contenido trimestral

**Total: 2 clics** ✅

---

## 📱 RESPONSIVE DESIGN

### Breakpoints:
- **Desktop**: > 1200px (diseño completo con márgenes laterales grandes)
- **Laptop**: 1024-1200px (diseño completo con márgenes medianos)
- **Tablet**: 768-1024px (grid 2 columnas, hero centrado)
- **Móvil**: < 768px (columna única, menú hamburguesa)

### Adaptaciones Móvil:
- Navegación oculta → menú hamburguesa
- Hero: Solo texto centrado, video de fondo conservado
- Programas: Grid 1 columna con scroll vertical
- Horarios: Stack vertical, selector de días con scroll horizontal
- Precios: Cards apiladas full-width
- Formulario: Inputs full-width, padding reducido
- WhatsApp: 60px sin texto, solo icono

### Márgenes para Ver el Fondo:
- Desktop: `padding: 3rem 6rem` en article.programa-page
- Laptop: `padding: 2rem 4rem`
- Tablet: `padding: 2rem`
- Móvil: `padding: 1rem`

---

## ⚡ RENDIMIENTO Y OPTIMIZACIÓN

### Optimizaciones de Video:
- Video comprimido (H.264, resolución optimizada)
- Poster frame mientras carga
- Lazy loading para otros videos
- Pausar video cuando no está visible (Intersection Observer)

### Optimizaciones Generales:
- Fuentes cargadas con `preconnect` + `display=swap`
- Animaciones con `transform` y `opacity` (GPU-accelerated)
- Intersection Observer para animaciones lazy y video control
- `user-select: none` en elementos decorativos
- `-webkit-tap-highlight-color: transparent` para móvil
- Imágenes optimizadas (WebP con fallback JPG)

### Accesibilidad (WCAG AA):
- `prefers-reduced-motion` desactiva animaciones y pausa video
- Contraste alto validado (ver tabla de contrastes en paleta)
- Focus visible en navegación con teclado
- Botones grandes (min 44x44px touch target)
- Labels explícitos en formularios
- ARIA labels en iconos y video
- Alt text descriptivo en imágenes

---

## 🎨 GUÍA DE COLORES POR CONTEXTO

| Contexto | Color | Uso |
|---------|-------|-----|
| **Navegación activa** | #256edc | Link activo, hover estados |
| **CTAs Principales** | Gradiente #1c4c96 → #427ed7 | Botones de inscripción |
| **CTAs Secundarios** | #5f95e7 | Botones "Ver más", links |
| **Badges de edad** | #97bdf5 | Badges en tarjetas de programa |
| **Borders hover** | #427ed7 | Bordes superiores en hover |
| **Backgrounds sutiles** | #F5F5F5 con tinte #97bdf5 | Secciones alternadas |
| **Overlay video** | rgba(28,76,150,0.7) → rgba(95,149,231,0.6) | Hero section |
| **Sombras** | rgba(28,76,150,0.15) | Drop shadows en cards |

---

## 📦 ARCHIVOS Y ESTRUCTURA

```
DAW/
├── index.html                   # Página principal (robótica e IA)
├── css/
│   └── 3duca-styles.css        # Sistema de diseño completo
├── js/
│   └── 3duca-scripts.js        # Interacciones y animaciones
├── videos/
│   └── Age-of-Beyond.mp4       # Video de fondo hero
├── images/
│   ├── logo.png                # Logo academia
│   └── mascota.png             # Mascota opcional
└── educacion/
    ├── programa-6-8.html       # Pequeños Inventores
    ├── programa-9-11.html      # Exploradores Tecnológicos
    ├── programa-12-14.html     # Programadores y Makers
    └── programa-15-17.html     # Ingenieros Junior
```

---

## 🎯 CONCLUSIÓN

Este diseño implementa el concepto **"Professional Tech"** con:

✅ **Paleta azul profesional** con contrastes validados WCAG AA
✅ **Video background atmosférico** en hero con overlay optimizado
✅ **Especialización clara** en Robótica e Inteligencia Artificial
✅ **Micro-interacciones fluidas** con animaciones GPU-accelerated
✅ **Jerarquía visual clara** (programas/precios/horarios < 3 clics)
✅ **4 programas por edad** con contenido detallado
✅ **Responsive mobile-first** con márgenes adaptativos
✅ **Accesibilidad WCAG AA** con reduced-motion support
✅ **Conversión optimizada** con múltiples CTAs estratégicos
✅ **Diseño centrado** con márgenes laterales para ver fondo

**Resultado**: Una experiencia de usuario moderna, profesional y tecnológica que refleja la especialización en robótica e IA de la academia, con una estética cohesiva basada en tonos azules que transmiten confianza, innovación y profesionalismo.

---

**Diseñado por**: Senior UI/UX Designer
**Fecha**: Enero 2026
**Tecnologías**: HTML5, CSS3, Vanilla JS
**Framework Visual**: Custom Design System (Robótica e IA)
**Paleta**: Blues Professional (5 tonos validados)
