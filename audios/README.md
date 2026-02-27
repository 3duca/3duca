# Carpeta Audios

Esta carpeta contiene archivos de audio para la Academia de IA y Robótica.

## Formatos soportados
- `.mp3` - Audio MPEG
- `.ogg` - Ogg Vorbis
- `.wav` - Audio sin comprimir

## Estructura sugerida
```
audios/
  ├── efectos/      # Efectos de sonido para la interfaz
  ├── musica/       # Música de fondo
  └── voces/        # Narraciones y audios educativos
```

## Uso en HTML
```html
<audio controls>
  <source src="audios/nombre-archivo.mp3" type="audio/mpeg">
  Tu navegador no soporta el elemento de audio.
</audio>
```
