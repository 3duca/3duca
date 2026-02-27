# Guía de Seguridad

## Mejores Prácticas

### 1. Protección de Datos Personales (GDPR)

#### Formularios de Contacto

```html
<!-- Añadir checkbox de consentimiento -->
<label>
  <input type="checkbox" name="privacy" required>
  He leído y acepto la 
  <a href="/politica-privacidad.html">Política de Privacidad</a>
</label>
```

#### Cookie Consent

```javascript
// Implementar banner de cookies
if (!localStorage.getItem('cookiesAccepted')) {
  showCookieBanner();
}
```

### 2. Seguridad en Formularios

#### Validación en Cliente

```javascript
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}
```

#### Headers de Seguridad

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted-cdn.com;
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### 3. Protección de Variables de Entorno

**NUNCA** subir `.env` al repositorio:

```bash
# .gitignore
.env
.env.local
.env.production
```

### 4. Protección contra Spam

#### reCAPTCHA en Formularios

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<div class="g-recaptcha" data-sitekey="TU_SITE_KEY"></div>
```

#### Rate Limiting

```javascript
// Limitar envíos de formulario
const rateLimiter = {
  attempts: 0,
  lastAttempt: 0,
  maxAttempts: 3,
  cooldown: 300000, // 5 minutos
  
  canSubmit() {
    const now = Date.now();
    if (now - this.lastAttempt > this.cooldown) {
      this.attempts = 0;
    }
    
    if (this.attempts >= this.maxAttempts) {
      return false;
    }
    
    this.attempts++;
    this.lastAttempt = now;
    return true;
  }
};
```

### 5. HTTPS

**SIEMPRE** usar HTTPS en producción:

```javascript
// Redirigir a HTTPS
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

### 6. Sanitización de Datos

```javascript
// Sanitizar HTML antes de insertar
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
```

### 7. Protección de Archivos Sensibles

#### .htaccess

```apache
# Proteger archivos de configuración
<FilesMatch "\.(env|json|config\.js)$">
  Order allow,deny
  Deny from all
</FilesMatch>

# Proteger directorios
<DirectoryMatch "^/.*(node_modules|\.git|tests|config).*$">
  Order allow,deny
  Deny from all
</DirectoryMatch>
```

### 8. Auditoría de Seguridad

```bash
# Verificar vulnerabilidades en dependencias
npm audit

# Corregir automáticamente
npm audit fix

# Actualizar paquetes
npm update
```

### 9. Logging y Monitorización

```javascript
// Registrar intentos de acceso sospechosos
function logSecurityEvent(type, details) {
  const event = {
    timestamp: new Date().toISOString(),
    type: type,
    details: details,
    ip: getUserIP(),
    userAgent: navigator.userAgent
  };
  
  // Enviar a sistema de logs
  console.warn('Security Event:', event);
}
```

### 10. Backup Regular

```bash
# Backup automático diario
npm run backup

# Verificar integridad
npm run validate
```

## Checklist de Seguridad

- [ ] HTTPS configurado y activo
- [ ] Headers de seguridad implementados
- [ ] Validación de formularios (cliente y servidor)
- [ ] Protección contra XSS
- [ ] Protección contra CSRF
- [ ] Rate limiting en formularios
- [ ] reCAPTCHA o similar
- [ ] `.env` en `.gitignore`
- [ ] Cookie consent banner
- [ ] Política de privacidad publicada
- [ ] Backups automáticos configurados
- [ ] npm audit sin vulnerabilidades críticas
- [ ] Archivos sensibles protegidos
- [ ] Logs de seguridad activos
- [ ] CSP configurado

## Contacto de Seguridad

Si encuentras una vulnerabilidad de seguridad, por favor contacta:

- Email: security@academiarobotica.es
- No publiques la vulnerabilidad públicamente hasta que se corrija

## Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GDPR Checklist](https://gdpr.eu/checklist/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
