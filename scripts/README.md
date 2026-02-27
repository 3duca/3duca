# Carpeta Scripts

Esta carpeta contiene archivos JavaScript reutilizables y modulares.

## Organización
```
scripts/
  ├── utils/           # Funciones utilitarias generales
  ├── animations/      # Scripts de animaciones
  ├── forms/           # Validación y manejo de formularios
  ├── navigation/      # Scripts de navegación y menús
  └── interactive/     # Elementos interactivos
```

## Scripts principales

### utils.js
Funciones auxiliares generales:
```javascript
// Formateo de fechas, validaciones, etc.
```

### form-validator.js
Validación de formularios:
```javascript
// Validación de email, teléfono, campos requeridos
```

### smooth-scroll.js
Navegación suave entre secciones:
```javascript
// Scroll suave al hacer clic en enlaces internos
```

### video-controls.js
Control del video de fondo:
```javascript
// Pausar/reproducir, volumen, responsive
```

## Uso en HTML
```html
<script src="scripts/utils.js"></script>
<script src="scripts/form-validator.js"></script>
```

## Buenas prácticas
- Usar nombres descriptivos
- Comentar funciones complejas
- Mantener módulos pequeños y enfocados
- Seguir convenciones de nomenclatura (camelCase)
