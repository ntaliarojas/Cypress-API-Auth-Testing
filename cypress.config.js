const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true, 
  videosFolder: 'cypress/videos', 
  e2e: {
    baseUrl: 'https://api.demoblaze.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  }
});