# Carpeta SWFs

Esta carpeta contiene archivos Flash (*.swf) para animaciones.

⚠️ **NOTA IMPORTANTE**: Adobe Flash Player fue descontinuado el 31 de diciembre de 2020.

## Alternativas modernas recomendadas

### En lugar de Flash, usa:
1. **HTML5 Canvas** - Para animaciones y juegos
2. **CSS3 Animations** - Para animaciones de interfaz
3. **WebGL/Three.js** - Para gráficos 3D
4. **Lottie** - Para animaciones complejas exportadas desde After Effects
5. **GreenSock (GSAP)** - Librería de animación JavaScript

## Conversión de archivos SWF
Si tienes archivos SWF existentes, puedes:
- Convertirlos a video (MP4, WebM)
- Recrearlos con HTML5 Canvas
- Usar emuladores como Ruffle (limitado)

## Estructura (si aún necesario)
```
swfs/
  ├── animaciones/     # Animaciones educativas
  ├── juegos/          # Mini-juegos interactivos
  └── demos/           # Demostraciones técnicas
```

## Código de ejemplo moderno (Canvas)
```html
<canvas id="animacion" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('animacion');
  const ctx = canvas.getContext('2d');
  // Tu animación aquí
</script>
```
