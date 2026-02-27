# Datos estructurados de la Academia

Esta carpeta contiene todos los datos del sitio web en formato JSON para facilitar el mantenimiento y la actualización.

## 📁 Archivos

### programs.json
Información completa de todos los programas educativos:
- Pequeños Inventores (6-8 años)
- Exploradores Tecnológicos (9-11 años)
- Programadores y Makers (12-14 años)
- Ingenieros Junior (15-17 años)

**Estructura:**
```json
{
  "id": "string",
  "name": "string",
  "ageRange": "string",
  "price": number,
  "technologies": array,
  "schedule": object
}
```

### testimonials.json
Testimonios de alumnos y padres con sus experiencias.

**Estructura:**
```json
{
  "id": number,
  "name": "string",
  "age": number,
  "program": "string",
  "rating": number (1-5),
  "text": "string",
  "featured": boolean
}
```

### faq.json
Preguntas frecuentes organizadas por categorías.

**Categorías:**
- inscripcion
- metodologia
- materiales
- horarios
- certificacion
- actividades
- precios

**Estructura:**
```json
{
  "id": number,
  "question": "string",
  "answer": "string",
  "category": "string",
  "order": number
}
```

### team.json
Información del equipo docente, instalaciones y estadísticas.

**Secciones:**
- teachers: Array de profesores
- facilities: Información de instalaciones
- stats: Estadísticas de la academia

## 🔄 Actualizar Datos

Para modificar la información del sitio:

1. Edita el archivo JSON correspondiente
2. Respeta la estructura existente
3. Valida el JSON: https://jsonlint.com/
4. Ejecuta validación local:
   ```bash
   npm run validate
   ```

## ⚠️ Importante

- **NO** borrar campos requeridos
- Mantener tipos de datos correctos (string, number, boolean)
- Usar encoding UTF-8
- Fechas en formato ISO (YYYY-MM-DD)
- IDs únicos para cada elemento

## 🔍 Validación

Los archivos JSON se validan automáticamente en:
- Pre-commit hooks
- Tests unitarios
- Script de validación manual

## 📝 Ejemplos

Ver archivos existentes para referencias de formato correcto.
