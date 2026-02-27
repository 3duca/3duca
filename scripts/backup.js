const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script para hacer backup del sitio
 */

const backupDir = path.join(__dirname, '../backups');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const backupName = `backup-${timestamp}`;
const backupPath = path.join(backupDir, backupName);

// Carpetas a incluir en el backup
const foldersToBackup = [
  'css',
  'js',
  'images',
  'data',
  'config',
  'educacion',
  'videos',
  'pdf',
  'audios'
];

// Archivos individuales a incluir
const filesToBackup = [
  'index.html',
  'manifest.json',
  'robots.txt',
  'sitemap.xml',
  'service-worker.js',
  'package.json'
];

function createBackup() {
  try {
    // Crear directorio de backups si no existe
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    // Crear directorio específico para este backup
    fs.mkdirSync(backupPath, { recursive: true });

    console.log('📦 Iniciando backup...');

    // Copiar carpetas
    foldersToBackup.forEach(folder => {
      const sourcePath = path.join(__dirname, '..', folder);
      if (fs.existsSync(sourcePath)) {
        const destPath = path.join(backupPath, folder);
        copyRecursiveSync(sourcePath, destPath);
        console.log(`✅ Copiado: ${folder}/`);
      }
    });

    // Copiar archivos
    filesToBackup.forEach(file => {
      const sourcePath = path.join(__dirname, '..', file);
      if (fs.existsSync(sourcePath)) {
        const destPath = path.join(backupPath, file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Copiado: ${file}`);
      }
    });

    // Crear archivo ZIP (requiere 7zip o similar en el PATH)
    try {
      const zipPath = `${backupPath}.zip`;
      if (process.platform === 'win32') {
        execSync(`powershell Compress-Archive -Path "${backupPath}\\*" -DestinationPath "${zipPath}"`);
      } else {
        execSync(`zip -r "${zipPath}" "${backupPath}"`);
      }
      
      // Eliminar carpeta temporal (mantener solo ZIP)
      fs.rmSync(backupPath, { recursive: true, force: true });
      
      console.log(`\n✨ Backup completado: ${backupName}.zip`);
      console.log(`📁 Ubicación: ${zipPath}`);
    } catch (zipError) {
      console.log(`\n✨ Backup completado (sin comprimir): ${backupName}`);
      console.log(`📁 Ubicación: ${backupPath}`);
    }

    // Limpiar backups antiguos (mantener últimos 10)
    cleanOldBackups();

  } catch (error) {
    console.error('❌ Error al crear backup:', error.message);
    process.exit(1);
  }
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItem => {
      copyRecursiveSync(
        path.join(src, childItem),
        path.join(dest, childItem)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function cleanOldBackups() {
  const backups = fs.readdirSync(backupDir)
    .filter(file => file.startsWith('backup-'))
    .map(file => ({
      name: file,
      path: path.join(backupDir, file),
      time: fs.statSync(path.join(backupDir, file)).mtime.getTime()
    }))
    .sort((a, b) => b.time - a.time);

  // Mantener solo los últimos 10 backups
  if (backups.length > 10) {
    backups.slice(10).forEach(backup => {
      fs.rmSync(backup.path, { recursive: true, force: true });
      console.log(`🗑️  Backup antiguo eliminado: ${backup.name}`);
    });
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  createBackup();
}

module.exports = { createBackup };
