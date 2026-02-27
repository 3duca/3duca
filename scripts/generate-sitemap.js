const fs = require('fs');
const path = require('path');

/**
 * Script para generar sitemap.xml automáticamente
 */

const baseUrl = 'https://www.academiarobotica.es';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/educacion/programa-6-8.html', priority: '0.9', changefreq: 'monthly' },
  { url: '/educacion/programa-9-11.html', priority: '0.9', changefreq: 'monthly' },
  { url: '/educacion/programa-12-14.html', priority: '0.9', changefreq: 'monthly' },
  { url: '/educacion/programa-15-17.html', priority: '0.9', changefreq: 'monthly' },
  { url: '/info.html', priority: '0.7', changefreq: 'monthly' },
];

function generateSitemap() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  const sitemapPath = path.join(__dirname, '../sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generado correctamente en:', sitemapPath);
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };
