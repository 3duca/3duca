# Guía de Despliegue

## Requisitos Previos

- Servidor web (Apache, Nginx o similar)
- Node.js 16+ (para scripts de build)
- Git (opcional)

## Opción 1: Despliegue Estático Simple

### 1. Preparar archivos

```bash
# Instalar dependencias
npm install

# Generar build de producción
npm run build

# Generar sitemap
npm run generate-sitemap
```

### 2. Configurar servidor web

#### Apache (.htaccess)

Crear archivo `.htaccess` en la raíz:

```apache
# Habilitar mod_rewrite
RewriteEngine On

# Forzar HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Comprimir contenido
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache de recursos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Seguridad
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### Nginx

```nginx
server {
    listen 80;
    server_name academiarobotica.es www.academiarobotica.es;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name academiarobotica.es www.academiarobotica.es;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    root /var/www/academia;
    index index.html;

    # Compresión
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### 3. Subir archivos

```bash
# Via FTP/SFTP o rsync
rsync -avz --exclude 'node_modules' --exclude '.git' ./ usuario@servidor:/var/www/academia/
```

## Opción 2: Vercel / Netlify (Recomendado)

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

Archivo `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".",
  "routes": [
    { "src": "/", "dest": "/index.html" },
    { "src": "/educacion/(.*)", "dest": "/educacion/$1" }
  ]
}
```

### Netlify

Archivo `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Opción 3: GitHub Pages

```bash
# Configurar gh-pages
npm install -D gh-pages

# Añadir script en package.json
"deploy:gh": "npm run build && gh-pages -d ."

# Desplegar
npm run deploy:gh
```

## Post-Despliegue

### Verificar

- [ ] Todas las páginas cargan correctamente
- [ ] Imágenes se muestran
- [ ] Formularios funcionan
- [ ] HTTPS está activo
- [ ] Sitemap accesible en `/sitemap.xml`
- [ ] robots.txt accesible
- [ ] Manifest para PWA funciona

### SEO

1. **Google Search Console**
   - Registrar sitio
   - Enviar sitemap

2. **Google Analytics**
   - Configurar tracking
   - Verificar eventos

3. **Performance**
   - Verificar en PageSpeed Insights
   - Optimizar Core Web Vitals

## Mantenimiento

### Backups automáticos

```bash
# Configurar cron job (Linux)
0 2 * * * cd /var/www/academia && node scripts/backup.js

# Configurar tarea programada (Windows)
schtasks /create /sc daily /tn "Backup Academia" /tr "node C:\path\to\scripts\backup.js" /st 02:00
```

### Actualizaciones

```bash
# Hacer backup
npm run backup

# Actualizar dependencias
npm update

# Rebuild
npm run build

# Validar
npm run validate

# Desplegar
npm run deploy
```

## Troubleshooting

### Error: CSS no se carga

- Verificar rutas relativas/absolutas
- Comprobar permisos de archivos
- Limpiar caché del navegador

### Error: Formulario no funciona

- Verificar configuración de SMTP en `.env`
- Comprobar que el servidor permite envío de emails
- Revisar logs del servidor

### Error: Imágenes 404

- Verificar que la carpeta `images/` existe
- Comprobar nombres de archivo (case-sensitive)
- Verificar permisos de lectura
