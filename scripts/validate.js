const fs = require('fs');
const path = require('path');

/**
 * Script para optimizar imágenes y recursos
 */

const dataDir = path.join(__dirname, '../data');

function validateJsonFiles() {
  console.log('🔍 Validando archivos JSON...\n');

  const jsonFiles = ['programs.json', 'testimonials.json', 'faq.json', 'team.json'];
  let allValid = true;

  jsonFiles.forEach(file => {
    const filePath = path.join(dataDir, file);
    
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`❌ ${file} - No encontrado`);
        allValid = false;
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);

      // Validaciones específicas
      if (file === 'programs.json') {
        if (!Array.isArray(data) || data.length !== 4) {
          console.log(`⚠️  ${file} - Debe contener 4 programas`);
          allValid = false;
        }
      }

      console.log(`✅ ${file} - Válido`);

    } catch (error) {
      console.log(`❌ ${file} - Error: ${error.message}`);
      allValid = false;
    }
  });

  return allValid;
}

function checkRequiredFiles() {
  console.log('\n📋 Verificando archivos requeridos...\n');

  const requiredFiles = [
    'index.html',
    'manifest.json',
    'robots.txt',
    'package.json',
    '.gitignore',
    '.env.example'
  ];

  let allExist = true;

  requiredFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file}`);
    } else {
      console.log(`❌ ${file} - Falta`);
      allExist = false;
    }
  });

  return allExist;
}

function generateReport() {
  console.log('\n📊 REPORTE DE VALIDACIÓN\n');
  console.log('='.repeat(50));
  
  const jsonValid = validateJsonFiles();
  const filesExist = checkRequiredFiles();

  console.log('\n' + '='.repeat(50));
  
  if (jsonValid && filesExist) {
    console.log('\n✨ Todo está correcto!\n');
    return true;
  } else {
    console.log('\n⚠️  Se encontraron problemas que deben resolverse.\n');
    return false;
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  const success = generateReport();
  process.exit(success ? 0 : 1);
}

module.exports = { validateJsonFiles, checkRequiredFiles, generateReport };
