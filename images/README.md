# Carpeta Images

Esta carpeta contiene imágenes para la Academia de IA y Robótica.

## Formatos soportados
- `.jpg` / `.jpeg` - Fotografías y imágenes con muchos colores
- `.png` - Imágenes con transparencia, logos, iconos
- `.gif` - Animaciones simples
- `.svg` - Gráficos vectoriales escalables
- `.webp` - Formato moderno optimizado

## Estructura actual
```
images/
  ├── logos/           # Logos de la academia
  ├── programas/       # Imágenes de cada programa
  ├── tecnologias/     # Logos de tecnologías (Arduino, Python, etc.)
  ├── galeria/         # Fotos de clases y proyectos
  ├── profesores/      # Fotos del equipo
  └── backgrounds/     # Fondos e imágenes decorativas
```

## Imágenes clave necesarias
- `logo-academia.png` - Logo principal
- `hero-robotica.jpg` - Imagen hero principal
- `arduino-logo.png` - Logo Arduino
- `python-logo.png` - Logo Python
- `lego-mindstorms.jpg` - Foto de LEGO Mindstorms
- `scratch-logo.png` - Logo Scratch

## Optimización
Para mejor rendimiento web:
1. Comprimir imágenes (TinyPNG, ImageOptim)
2. Usar formatos modernos (WebP)
3. Crear versiones responsive (diferentes tamaños)
4. Usar lazy loading para imágenes below the fold

## Uso en HTML
```html
<!-- Imagen simple -->
<img src="images/logo.png" alt="Academia de Robótica">

<!-- Imagen responsive -->
<picture>
  <source srcset="images/hero.webp" type="image/webp">
  <img src="images/hero.jpg" alt="Clases de robótica">
</picture>
```
