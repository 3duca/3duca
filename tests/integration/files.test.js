const fs = require('fs');
const path = require('path');

describe('Validación de archivos JSON', () => {
  const dataDir = path.join(__dirname, '../../data');

  test('programs.json debe ser JSON válido', () => {
    const filePath = path.join(dataDir, 'programs.json');
    const content = fs.readFileSync(filePath, 'utf8');
    expect(() => JSON.parse(content)).not.toThrow();
  });

  test('testimonials.json debe ser JSON válido', () => {
    const filePath = path.join(dataDir, 'testimonials.json');
    const content = fs.readFileSync(filePath, 'utf8');
    expect(() => JSON.parse(content)).not.toThrow();
  });

  test('faq.json debe ser JSON válido', () => {
    const filePath = path.join(dataDir, 'faq.json');
    const content = fs.readFileSync(filePath, 'utf8');
    expect(() => JSON.parse(content)).not.toThrow();
  });

  test('team.json debe ser JSON válido', () => {
    const filePath = path.join(dataDir, 'team.json');
    const content = fs.readFileSync(filePath, 'utf8');
    expect(() => JSON.parse(content)).not.toThrow();
  });
});

describe('Validación de estructura HTML', () => {
  test('index.html debe existir', () => {
    const indexPath = path.join(__dirname, '../../index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
  });

  test('manifest.json debe existir y ser válido', () => {
    const manifestPath = path.join(__dirname, '../../manifest.json');
    expect(fs.existsSync(manifestPath)).toBe(true);
    
    const content = fs.readFileSync(manifestPath, 'utf8');
    const manifest = JSON.parse(content);
    
    expect(manifest).toHaveProperty('name');
    expect(manifest).toHaveProperty('short_name');
    expect(manifest).toHaveProperty('start_url');
  });
});
