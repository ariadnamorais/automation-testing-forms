const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.automationtesting.in',
    specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
  },
  chromeWebSecurity: false
});
