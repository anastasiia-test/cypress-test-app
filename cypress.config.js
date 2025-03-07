const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-example'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
