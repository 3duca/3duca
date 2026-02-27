# Documentación de la API

## Endpoints Disponibles

> **Nota**: Esta API está en desarrollo. Actualmente el sitio es estático, pero estos endpoints están planificados para futuras versiones.

## Autenticación

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "usuario@ejemplo.com",
  "password": "contraseña"
}
```

## Programas

### Obtener todos los programas
```http
GET /api/programs
```

**Respuesta**:
```json
[
  {
    "id": "pequenos-inventores",
    "name": "Pequeños Inventores",
    "ageRange": "6-8 años",
    "price": 70,
    "duration": "1.5 horas/semana"
  }
]
```

### Obtener un programa específico
```http
GET /api/programs/:id
```

## Inscripciones

### Crear nueva inscripción
```http
POST /api/enrollments
Content-Type: application/json

{
  "studentName": "Juan Pérez",
  "age": 10,
  "parentName": "María Pérez",
  "email": "maria@ejemplo.com",
  "phone": "+34666123456",
  "programId": "exploradores-tecnologicos",
  "preferredSchedule": "Martes 17:30-19:30"
}
```

## Contacto

### Enviar mensaje de contacto
```http
POST /api/contact
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+34666123456",
  "subject": "Consulta sobre programas",
  "message": "Me gustaría más información..."
}
```

## Testimonios

### Obtener testimonios
```http
GET /api/testimonials?featured=true
```

## Newsletter

### Suscribirse al newsletter
```http
POST /api/newsletter
Content-Type: application/json

{
  "email": "usuario@ejemplo.com",
  "name": "Juan Pérez"
}
```
