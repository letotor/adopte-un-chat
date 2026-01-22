module.exports = {
  testEnvironment: 'jsdom',

  // Recherche des tests dans le dossier __tests__
  testMatch: [
    '**/__tests__/**/*.test.js',
    '**/__tests__/**/*.spec.js'
  ],

  // Couverture de code
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/**/*.spec.js'
  ],

  // Seuils de couverture recommandés
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  // Configuration du reporter de couverture
  coverageReporters: ['text', 'text-summary', 'html', 'lcov'],

  // Transformation des fichiers
  transform: {},

  // Extensions de fichiers à traiter
  moduleFileExtensions: ['js', 'json'],

  // Mode verbose pour plus de détails
  verbose: true
};
