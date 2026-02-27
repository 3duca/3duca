# Contribuir a Academia de Robótica e IA

¡Gracias por tu interés en contribuir! 🎉

## Cómo Contribuir

### 1. Reportar Bugs

Si encuentras un error:

1. Verifica que no exista ya un issue similar
2. Crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Comportamiento esperado vs actual
   - Screenshots si aplica
   - Navegador y versión

### 2. Sugerir Mejoras

Para sugerencias de nuevas funcionalidades:

1. Abre un issue con etiqueta "enhancement"
2. Describe la funcionalidad detalladamente
3. Explica por qué sería útil
4. Proporciona ejemplos de uso

### 3. Pull Requests

#### Proceso

1. Fork el repositorio
2. Crea una rama desde `main`:
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```

3. Haz tus cambios siguiendo las guías de estilo

4. Ejecuta tests y linting:
   ```bash
   npm run lint
   npm test
   npm run validate
   ```

5. Commit con mensaje descriptivo:
   ```bash
   git commit -m "feat: descripción del cambio"
   ```

6. Push a tu fork:
   ```bash
   git push origin feature/nombre-descriptivo
   ```

7. Abre un Pull Request

#### Guía de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan código)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Mantenimiento

Ejemplos:
```
feat: añadir sección de testimonios
fix: corregir formulario de contacto
docs: actualizar README con nuevos scripts
```

### 4. Guía de Estilo

#### JavaScript

- Usar ES6+ syntax
- 2 espacios para indentación
- Comillas simples para strings
- Semicolons al final de línea
- Nombres descriptivos para variables

```javascript
// ✅ Bien
const studentName = 'María';
function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

// ❌ Mal
var x = "Maria"
function calc(y) {
  return new Date().getFullYear()-y
}
```

#### CSS

- Mobile-first approach
- BEM naming cuando sea apropiado
- Variables CSS para colores y espaciado
- Comentarios para secciones

```css
/* ✅ Bien */
.card {
  padding: var(--spacing-md);
  background: var(--color-primary);
}

.card__title {
  font-size: 1.5rem;
}

/* ❌ Mal */
.Card {
  padding: 20px;
  background: #0066FF;
}
```

#### HTML

- Semántica HTML5
- Atributos alt en imágenes
- Títulos descriptivos
- ARIA labels cuando sea necesario

```html
<!-- ✅ Bien -->
<section aria-label="Programas educativos">
  <h2>Nuestros Programas</h2>
  <img src="robot.jpg" alt="Robot LEGO Mindstorms EV3">
</section>

<!-- ❌ Mal -->
<div>
  <h2>Nuestros Programas</h2>
  <img src="robot.jpg">
</div>
```

### 5. Proceso de Revisión

- Los PRs serán revisados en 2-3 días
- Pueden requerirse cambios
- Una vez aprobado, será merged
- Los cambios aparecerán en el siguiente release

### 6. Código de Conducta

- Sé respetuoso y profesional
- Acepta críticas constructivas
- Enfócate en lo mejor para el proyecto
- Ayuda a otros contribuidores

## Áreas de Contribución

### 🐛 Bugs Conocidos
Ver issues con etiqueta `bug`

### 🚀 Funcionalidades Pendientes
Ver issues con etiqueta `enhancement`

### 📚 Documentación
Siempre se puede mejorar:
- Añadir ejemplos
- Corregir errores
- Traducir a otros idiomas

### 🧪 Testing
- Aumentar cobertura
- Añadir tests e2e
- Mejorar tests existentes

### ♿ Accesibilidad
- Mejorar ARIA labels
- Testear con lectores de pantalla
- Mejorar contraste de colores

## Preguntas

Si tienes dudas:
- Abre un issue con etiqueta `question`
- Email: dev@academiarobotica.es

¡Gracias por contribuir! 🙏
