# Carpeta Videos

Esta carpeta contiene archivos de vídeo para la Academia de IA y Robótica.

## Archivos actuales
- `Age-of-Beyond.mp4` - Video de fondo de la portada

## Formatos soportados
- `.mp4` - H.264/H.265 (recomendado, compatible con todos los navegadores)
- `.webm` - VP9 (alternativa moderna)
- `.ogv` - Ogg Theora
- `.flv` - Flash Video (obsoleto, no recomendado)
- `.wmv` - Windows Media Video (limitado a Windows)

## Estructura sugerida
```
videos/
  ├── backgrounds/     # Videos de fondo
  ├── tutoriales/      # Videos educativos
  ├── demos/           # Demostraciones de proyectos
  ├── testimonios/     # Videos de alumnos y padres
  └── promocionales/   # Material promocional
```

## Videos recomendados a añadir
- `intro-academia.mp4` - Video introductorio
- `demo-arduino.mp4` - Demo de proyecto Arduino
- `demo-robot.mp4` - Demo de robot con ROS
- `testimonio-alumnos.mp4` - Testimonios

## Uso en HTML

### Video de fondo (actual)
```html
<video autoplay muted loop playsinline id="myVideo">
  <source src="videos/Age-of-Beyond.mp4" type="video/mp4">
</video>
```

### Video con controles
```html
<video controls width="640" height="360">
  <source src="videos/tutorial.mp4" type="video/mp4">
  <source src="videos/tutorial.webm" type="video/webm">
  Tu navegador no soporta el elemento de video.
</video>
```

### Video responsive
```html
<div class="video-container">
  <video controls>
    <source src="videos/demo.mp4" type="video/mp4">
  </video>
</div>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
```

## Optimización
1. **Comprimir videos**: Usar HandBrake o FFmpeg
2. **Múltiples formatos**: Ofrecer MP4 y WebM
3. **Diferentes calidades**: 1080p, 720p, 480p
4. **Lazy loading**: Cargar videos bajo demanda
5. **Subtítulos**: Añadir pistas de texto (VTT)

## Comandos FFmpeg útiles

### Comprimir video
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
```

### Convertir a WebM
```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -c:a libopus output.webm
```

### Crear thumbnail
```bash
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg
```
