# 🤖 Academia de IA y Robótica - Sitio Web

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)

Sitio web oficial de la Academia de IA y Robótica - Educación extraescolar en inteligencia artificial, robótica y programación para niños y adolescentes (6-17 años).

## 📋 Descripción

Plataforma web moderna y optimizada que presenta los programas educativos de la academia, organizados por rangos de edad:

- **6-8 años**: Pequeños Inventores (Scratch Jr, LEGO WeDo)
- **9-11 años**: Exploradores Tecnológicos (Python, LEGO Mindstorms)
- **12-14 años**: Programadores y Makers (Arduino, Machine Learning)
- **15-17 años**: Ingenieros Junior (ROS2, Deep Learning)

## 🗂️ Estructura del Proyecto (Optimizada)

```
DAW/
├── 📄 Archivos de configuración
├── .env.example            # ⭐ Plantilla variables de entorno
├── .gitignore              # ⭐ Git ignore configurado
├── .prettierrc             # ⭐ Configuración formateo
├── .eslintrc.json          # ⭐ Linter JavaScript
├── package.json            # ⭐ Dependencias y scripts
├── jest.config.js          # ⭐ Configuración testing
├── manifest.json           # PWA manifest
├── robots.txt              # SEO
├── service-worker.js       # Service Worker PWA
├── sitemap.xml             # Mapa del sitio
│
├── 🎨 Frontend
├── index.html              # Página principal con video de fondo
├── css/                    # Hojas de estilo
│   ├── 3duca-styles.css    # Estilos principales
│   ├── educacion-mejorado.css
│   ├── educacion.css
│   └── styles.css
├── js/                     # JavaScript
│   ├── 3duca-scripts.js    # Scripts principales
│   └── educacion-mejorado.js
│
├── 📊 Datos estructurados (⭐ NUEVO)
├── data/
│   ├── programs.json       # ⭐ Datos de programas educativos
│   ├── testimonials.json   # ⭐ Testimonios de alumnos
│   ├── faq.json            # ⭐ Preguntas frecuentes
│   └── team.json           # ⭐ Equipo docente e instalaciones
│
├── ⚙️ Configuración (⭐ NUEVO)
├── config/
│   └── site.config.js      # ⭐ Configuración del sitio
│
├── 🎓 Páginas educativas
├── educacion/
│   ├── GUIA-ESTRUCTURA-MEJORADA.md
│   ├── programa-6-8.html   # Pequeños Inventores
│   ├── programa-9-11.html  # Exploradores Tecnológicos
│   ├── programa-12-14.html # Programadores y Makers
│   └── programa-15-17.html # Ingenieros Junior
│
├── 📁 Recursos multimedia
├── images/                 # Imágenes (JPG, PNG, GIF, SVG)
├── videos/                 # Vídeos (MP4, WebM)
│   └── Age-of-Beyond.mp4   # Video de fondo portada
├── audios/                 # Audio (MP3, OGG, WAV)
├── pdf/                    # Documentos PDF
└── descargas/              # Archivos descargables
│
├── 🧪 Testing (⭐ NUEVO)
├── tests/
│   ├── setup.js            # ⭐ Configuración de Jest
│   ├── unit/               # ⭐ Tests unitarios
│   │   └── site.test.js
│   └── integration/        # ⭐ Tests de integración
│       └── files.test.js
│
├── 🛠️ Scripts de utilidad (⭐ NUEVO)
├── scripts/
│   ├── generate-sitemap.js # ⭐ Generar sitemap.xml
│   ├── backup.js           # ⭐ Backup automático
│   └── validate.js         # ⭐ Validar archivos
│
├── 📚 Documentación (⭐ NUEVO)
├── docs/
│   ├── API.md              # ⭐ Documentación API
│   ├── DEPLOYMENT.md       # ⭐ Guía de despliegue
│   └── SECURITY.md         # ⭐ Guía de seguridad
│
└── 📦 Build (generado)
    ├── dist/               # Archivos minificados
    ├── backups/            # Backups automáticos
    └── logs/               # Logs del sistema
```

## 🚀 Características Principales

### ✨ Diseño Moderno
- 🎬 Video de fondo en hero section
- 📱 Diseño responsive (mobile-first)
- 🎨 Animaciones CSS3 suaves
- 🌈 Paleta de colores personalizada por edad
- ⚡ Progressive Web App (PWA)

### 🎯 Funcionalidades
- 📋 4 páginas detalladas de programas educativos
- 📧 Formulario de contacto integrado
- 🎯 Navegación smooth scroll
- 🎓 Sistema de certificación
- 💬 Testimonios de alumnos
- ❓ FAQ dinámica
- 🔍 SEO optimizado

### 🛠️ Desarrollo
- 📦 Gestión de dependencias con npm
- 🧪 Testing con Jest
- 🎨 Formateo automático con Prettier
- ✅ Linting con ESLint
- 📊 Datos estructurados en JSON
- 🔄 Scripts de automatización
- 💾 Sistema de backup
### 🎓 Tecnologías Educativas
- LEGO WeDo 2.0 & Mindstorms EV3
- Scratch Jr & Scratch 3.0
- Arduino & ESP32
- Python & TensorFlow
- ROS2 (Robot Operating System)
- OpenCV & Computer Vision

---

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js** 16+ y npm
- Navegador moderno (Chrome, Firefox, Edge)
- Editor de código (VS Code recomendado)

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/academia-robotica.git
cd DAW
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
# Copiar archivo de ejemplo
copy .env.example .env

# Editar .env con tus valores
```

4. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:8080`

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor con live reload
npm start                # Alias de dev

# Build y producción
npm run build            # Generar versión optimizada
npm run generate-sitemap # Crear sitemap.xml

# Calidad de código
npm run lint             # Verificar JavaScript
npm run lint:fix         # Corregir errores automáticamente
npm run format           # Formatear código

# Testing
npm test                 # Ejecutar tests
npm run test:watch       # Tests en modo watch

# Utilidades
npm run validate         # Validar archivos
npm run backup           # Crear backup
npm run deploy           # Build + sitemap + deploy
```

---

## 📚 Documentación

- 📖 [Guía de Despliegue](docs/DEPLOYMENT.md)
- 🔒 [Guía de Seguridad](docs/SECURITY.md)
- 🔌 [Documentación API](docs/API.md)

---

## 🗂️ Gestión de Datos

Los datos del sitio están estructurados en archivos JSON para fácil mantenimiento:

### Programas Educativos
Editar [data/programs.json](data/programs.json):
```json
{
  "id": "pequenos-inventores",
  "name": "Pequeños Inventores",
  "ageRange": "6-8 años",
  "price": 70,
  "technologies": ["Scratch Jr", "LEGO WeDo"]
}
```

### Testimonios
Editar [data/testimonials.json](data/testimonials.json):
```json
{
  "name": "María García",
  "age": 10,
  "program": "Exploradores Tecnológicos",
  "rating": 5,
  "text": "¡Me encanta programar robots!"
}
```

### FAQ
Editar [data/faq.json](data/faq.json):
```json
{
  "question": "¿Qué edad debe tener mi hijo/a?",
  "answer": "Ofrecemos programas de 6 a 17 años",
  "category": "inscripcion"
}
```

---

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en [css/3duca-styles.css](css/3duca-styles.css):
```css
:root {
  --color-primary: #0066FF;
  --color-secondary: #FF6B9D;
  --color-accent: #4ECDC4;
}
```

### Cambiar Video de Fondo

Reemplaza [videos/Age-of-Beyond.mp4](videos/Age-of-Beyond.mp4) y actualiza en [index.html](index.html):

```html
<video autoplay muted loop playsinline id="bg-video">
  <source src="videos/tu-video.mp4" type="video/mp4">
</video>
```

### Modificar Configuración del Sitio

Edita [config/site.config.js](config/site.config.js):

```javascript
module.exports = {
  site: {
    name: 'Academia de Robótica e IA',
    email: 'info@academiarobotica.es',
    phone: '+34 666 123 456'
  }
};
```

---

## 🧪 Testing

### Ejecutar Tests

```bash
# Todos los tests
npm test

# Con cobertura
npm test -- --coverage

# Modo watch
npm run test:watch

# Test específico
npm test -- site.test.js
```

### Estructura de Tests

```
tests/
├── unit/              # Tests unitarios
│   └── site.test.js
├── integration/       # Tests de integración
│   └── files.test.js
└── setup.js          # Configuración global
```

---

## 🔒 Seguridad

### Checklist de Seguridad

- ✅ HTTPS configurado
- ✅ Headers de seguridad implementados
- ✅ Validación de formularios
- ✅ Variables sensibles en `.env`
- ✅ `.gitignore` configurado
- ✅ CSP (Content Security Policy)
- ✅ Rate limiting en formularios

Ver [docs/SECURITY.md](docs/SECURITY.md) para más detalles.

---

## 📦 Despliegue

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
# Conectar repositorio GitHub
# Build command: npm run build
# Publish directory: .
```

### Servidor tradicional

```bash
# Build de producción
npm run build

# Subir carpeta dist/
rsync -avz dist/ usuario@servidor:/var/www/html/
```

Ver [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) para guías detalladas.

---

## 🛠️ Mantenimiento

### Backup Automático

```bash
# Crear backup manual
npm run backup

# Configurar cron job (Linux/Mac)
0 2 * * * cd /ruta/DAW && npm run backup

# Tarea programada (Windows)
schtasks /create /sc daily /tn "Backup Academia" /tr "npm run backup" /st 02:00
```

### Actualizar Dependencias

```bash
# Verificar actualizaciones
npm outdated

# Actualizar
npm update

# Auditar seguridad
npm audit
npm audit fix
```

### Validar Proyecto

```bash
# Validar archivos JSON y estructura
npm run validate
```

---

## 📊 Optimización

### Performance

- ✅ Imágenes optimizadas
- ✅ CSS y JS minificados
- ✅ Lazy loading de imágenes
- ✅ Service Worker para cache
- ✅ Preload de recursos críticos

### SEO

- ✅ Meta tags completos
- ✅ Schema.org structured data
- ✅ Sitemap.xml generado
- ✅ robots.txt configurado
- ✅ Open Graph tags
- ✅ Twitter Card tags

### Accesibilidad

- ✅ Semántica HTML5
- ✅ ARIA labels
- ✅ Contraste de colores
- ✅ Navegación por teclado
- ✅ Alt text en imágenes

---

## 📱 Progressive Web App (PWA)

El sitio funciona como PWA:

- 📴 Funciona offline
- 🔔 Notificaciones push (próximamente)
- 🏠 Instalable en dispositivos
- ⚡ Carga instantánea

Configurar en [manifest.json](manifest.json) y [service-worker.js](service-worker.js).

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 📞 Contacto

- **Email**: info@academiarobotica.es
- **Teléfono**: +34 666 123 456
- **Web**: https://www.academiarobotica.es
- **Dirección**: Calle Principal, 123, 46000 Valencia

---

## 📈 Changelog

### v2.0.0 (2026-02-04)

#### ⭐ Nuevas Funcionalidades
- ✅ Sistema de gestión de datos con JSON
- ✅ Testing con Jest
- ✅ Scripts de automatización
- ✅ Documentación completa
- ✅ Sistema de backup
- ✅ Configuración con variables de entorno

#### 🔧 Mejoras
- ✅ Estructura de proyecto optimizada
- ✅ Linting y formateo automático
- ✅ Build pipeline configurado
- ✅ SEO mejorado
- ✅ Performance optimizado

#### 🐛 Correcciones
- ✅ Carpetas vacías organizadas
- ✅ Referencias PHP obsoletas removidas
- ✅ Configuración Git mejorada

### v1.0.0
- Lanzamiento inicial

---

## 🙏 Agradecimientos

- Estudiantes y familias de la academia
- Equipo docente
- Comunidad open source

---

**Desarrollado con ❤️ para formar a los innovadores del futuro**

#### Cambiar video de fondo
Reemplaza el archivo en `videos/Age-of-Beyond.mp4` o actualiza la ruta en `index.html`:
```html
<video autoplay muted loop playsinline id="myVideo">
  <source src="videos/tu-video.mp4" type="video/mp4">
</video>
```

#### Actualizar información de contacto
Edita la sección de contacto en `index.html`:
```html
<p>+34 XXX XXX XXX</p>
<p>info@academiarobotica.es</p>
```

## 🔒 Seguridad

Ver [SECURITY.md](SECURITY.md) para:
- Criterios de ciberseguridad
- Configuración HTTPS
- Cabeceras de seguridad
- Validación de entradas
- Mejores prácticas

## 📂 Organización de Carpetas

### Carpetas de recursos
Cada carpeta de recursos (`audios/`, `images/`, `videos/`, etc.) contiene un README.md con:
- Formatos soportados
- Estructura sugerida
- Ejemplos de uso
- Mejores prácticas

### Añadir nuevos recursos

**Imágenes**: `images/`
```html
<img src="images/mi-imagen.jpg" alt="Descripción">
```

**Videos**: `videos/`
```html
<video controls>
  <source src="videos/tutorial.mp4" type="video/mp4">
</video>
```

**PDFs**: `pdf/`
```html
<a href="pdf/programa.pdf" target="_blank">Ver Programa</a>
```

**Archivos descargables**: `descargas/`
```html
<a href="descargas/proyecto.zip" download>Descargar Proyecto</a>
```

## 🎨 Estilos y Diseño

### CSS principal: `css/styles.css`
- Variables CSS para colores
- Estilos del video de fondo
- Grid layouts responsive
- Animaciones y transiciones

### CSS educación: `css/educacion.css`
- Estilos de tarjetas de programas
- Badges por edad con colores
- Grid 2×2 para programas
- Estilos de tecnologías

## 📱 Responsive

Breakpoints principales:
- Desktop: > 768px
- Tablet: 768px
- Mobile: < 768px

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

© 2025 Academia de IA y Robótica. Todos los derechos reservados.

## 📞 Contacto

- **Email**: info@academiarobotica.es
- **Teléfono**: +34 XXX XXX XXX
- **Web**: [URL de la academia]

## 🔄 Versión

**v2.0.0** - Enero 2026
- ✅ Reestructuración completa a Academia de IA y Robótica
- ✅ Video de fondo en portada
- ✅ 4 programas por edades
- ✅ Diseño responsive moderno
- ✅ Estructura de carpetas optimizada

---

**Desarrollado con ❤️ para formar a los innovadores del futuro**

## 📞 Contacto y Más Información

Para más información sobre 3DUCA y nuestros programas educativos, contacta con nosotros.

[![Youtube](https://img.shields.io/badge/-YouTube-red?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/@3DUCATechn)
[![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?style=flat-square&logo=twitter&logoColor=white)](https://x.com/3DUCA_)
[![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/3duca_tech/tagged/)


---
