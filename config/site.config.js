module.exports = {
  // Información del sitio
  site: {
    name: 'Academia de Robótica e IA',
    shortName: '3DUCA',
    description: 'Centro de actividad extraescolar especializado en robótica, programación e IA para niños y jóvenes de 6 a 17 años',
    url: process.env.SITE_URL || 'http://localhost:8080',
    email: process.env.CONTACT_EMAIL || 'info@academiarobotica.es',
    phone: '+34 666 123 456',
    address: {
      street: 'Calle Principal, 123',
      city: 'Valencia',
      postalCode: '46000',
      country: 'España'
    },
    social: {
      facebook: process.env.FACEBOOK_URL || '',
      instagram: process.env.INSTAGRAM_URL || '',
      twitter: process.env.TWITTER_URL || '',
      linkedin: process.env.LINKEDIN_URL || '',
      youtube: process.env.YOUTUBE_URL || ''
    }
  },

  // Programas educativos
  programs: {
    ages: {
      'pequeños-inventores': {
        name: 'Pequeños Inventores',
        ageRange: '6-8 años',
        price: 70,
        duration: '1.5 horas/semana',
        maxStudents: 8,
        technologies: ['Scratch Jr', 'LEGO WeDo 2.0', 'Bee-Bot'],
        color: '#FF6B9D'
      },
      'exploradores-tecnologicos': {
        name: 'Exploradores Tecnológicos',
        ageRange: '9-11 años',
        price: 80,
        duration: '2 horas/semana',
        maxStudents: 8,
        technologies: ['Python', 'LEGO Mindstorms EV3', 'Scratch'],
        color: '#4ECDC4'
      },
      'programadores-makers': {
        name: 'Programadores y Makers',
        ageRange: '12-14 años',
        price: 90,
        duration: '2 horas/semana',
        maxStudents: 8,
        technologies: ['Arduino', 'Python', 'Impresión 3D', 'Machine Learning'],
        color: '#95E1D3'
      },
      'ingenieros-junior': {
        name: 'Ingenieros Junior',
        ageRange: '15-17 años',
        price: 100,
        duration: '2.5 horas/semana',
        maxStudents: 6,
        technologies: ['ROS2', 'Deep Learning', 'IoT', 'Computer Vision'],
        color: '#F38181'
      }
    }
  },

  // Configuración de horarios
  schedule: {
    weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    timeSlots: [
      '16:00 - 17:30',
      '17:30 - 19:00',
      '19:00 - 20:30'
    ],
    saturday: ['10:00 - 12:00', '12:00 - 14:00']
  },

  // SEO
  seo: {
    keywords: [
      'robótica niños',
      'programación infantil',
      'extraescolar tecnología',
      'academia robótica Valencia',
      'clases programación niños',
      'LEGO educación',
      'inteligencia artificial jóvenes'
    ],
    ogImage: 'images/og-image.jpg',
    twitterCard: 'summary_large_image'
  },

  // Características del sitio
  features: {
    enableNewsletter: true,
    enableBlog: false,
    enableChat: false,
    enableBooking: true,
    enablePayments: false,
    maintenanceMode: process.env.MAINTENANCE_MODE === 'true'
  },

  // Límites
  limits: {
    maxUploadSize: process.env.MAX_UPLOAD_SIZE || '5MB',
    maxStudentsPerClass: parseInt(process.env.MAX_STUDENTS_PER_CLASS) || 8,
    sessionTimeout: 30 * 60 * 1000 // 30 minutos
  }
};
