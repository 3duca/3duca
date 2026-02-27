# Guía de Inicio Rápido

## ⚡ Configuración en 5 minutos

### 1. Requisitos
- Node.js 16+ instalado
- Editor de código (VS Code recomendado)

### 2. Instalación

```bash
# Navegar al proyecto
cd DAW

# Instalar dependencias
npm install

# Copiar configuración
copy .env.example .env
```

### 3. Iniciar desarrollo

```bash
npm run dev
```

Abre `http://localhost:8080` en tu navegador.

### 4. Configurar datos

Edita los archivos JSON en la carpeta `data/`:
- `programs.json` - Programas educativos
- `testimonials.json` - Testimonios
- `faq.json` - Preguntas frecuentes
- `team.json` - Equipo e instalaciones

### 5. Personalizar

1. **Colores**: Edita variables CSS en `css/3duca-styles.css`
2. **Contenido**: Modifica `index.html`
3. **Configuración**: Ajusta `config/site.config.js`
4. **Imágenes**: Reemplaza en carpeta `images/`

## 🚀 Comandos principales

```bash
npm run dev        # Servidor desarrollo
npm run build      # Build producción
npm test           # Ejecutar tests
npm run validate   # Validar archivos
npm run backup     # Crear backup
```

## 📝 Próximos pasos

1. Lee el [README.md](README.md) completo
2. Revisa la [guía de despliegue](docs/DEPLOYMENT.md)
3. Consulta [seguridad](docs/SECURITY.md)
4. Explora los [datos estructurados](data/)

## 🆘 ¿Problemas?

- Verifica Node.js: `node --version` (debe ser 16+)
- Reinstala: `rm -rf node_modules && npm install`
- Consulta [troubleshooting](docs/DEPLOYMENT.md#troubleshooting)

## 📞 Soporte

- Email: dev@academiarobotica.es
- Issues: GitHub
