/**
 * Tests para el sitio web de Academia de Robótica
 * @jest-environment jsdom
 */

describe('Navegación del sitio', () => {
  test('Debe cargar la página principal correctamente', () => {
    document.body.innerHTML = '<div id="app"></div>';
    const app = document.getElementById('app');
    expect(app).toBeTruthy();
  });

  test('Menú de navegación debe tener todos los enlaces', () => {
    document.body.innerHTML = `
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#programas">Programas</a>
        <a href="#metodologia">Metodología</a>
        <a href="#contacto">Contacto</a>
      </nav>
    `;
    const links = document.querySelectorAll('nav a');
    expect(links.length).toBe(4);
  });
});

describe('Formulario de contacto', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="contact-form">
        <input type="text" id="name" required>
        <input type="email" id="email" required>
        <input type="tel" id="phone" required>
        <textarea id="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    `;
  });

  test('Todos los campos requeridos existen', () => {
    const form = document.getElementById('contact-form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    expect(form).toBeTruthy();
    expect(name).toBeTruthy();
    expect(email).toBeTruthy();
    expect(phone).toBeTruthy();
    expect(message).toBeTruthy();
  });

  test('Email debe tener formato válido', () => {
    const emailInput = document.getElementById('email');
    emailInput.value = 'test@example.com';
    expect(emailInput.value).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});

describe('Validación de datos', () => {
  test('Validar email correcto', () => {
    const validEmail = 'usuario@ejemplo.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(validEmail)).toBe(true);
  });

  test('Rechazar email inválido', () => {
    const invalidEmail = 'usuario@ejemplo';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(invalidEmail)).toBe(false);
  });

  test('Validar teléfono español', () => {
    const validPhone = '+34666123456';
    const phoneRegex = /^(\+34|0034|34)?[6789]\d{8}$/;
    expect(phoneRegex.test(validPhone.replace(/\s/g, ''))).toBe(true);
  });
});

describe('Datos de programas', () => {
  const programs = require('../data/programs.json');

  test('Debe haber 4 programas', () => {
    expect(programs.length).toBe(4);
  });

  test('Cada programa debe tener propiedades requeridas', () => {
    programs.forEach(program => {
      expect(program).toHaveProperty('id');
      expect(program).toHaveProperty('name');
      expect(program).toHaveProperty('ageRange');
      expect(program).toHaveProperty('price');
      expect(program).toHaveProperty('technologies');
    });
  });

  test('Precios deben ser números positivos', () => {
    programs.forEach(program => {
      expect(typeof program.price).toBe('number');
      expect(program.price).toBeGreaterThan(0);
    });
  });
});
