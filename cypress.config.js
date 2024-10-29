const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
} 
module.exports = defineConfig({

  video: true,
  videoCompression: true,
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  experimentalStudio: true,
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  
  reporterOptions: {
  reportDir: 'cypress/report',
  charts: true,
  reportPageTitle: 'Reporte Firmas',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
  },

  projectId: 'pqnydr',
  e2e: {
    "specPattern": "**/*.feature",                  // <--- esta es la linea que hay que quitar o poner para poder ver o desver xD los archivos de cucumber 
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    testIsolation: false,
   

  },
});
