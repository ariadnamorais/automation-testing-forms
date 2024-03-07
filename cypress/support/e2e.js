// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

//retira o xhr requests logs
const app = window.top
if (!app.document.head.querySelector('[data-hide-command-log-request]')){
    const style = app.document.createElement('style');
    style.innerHTML = '.command-name-request, comand-name-xhr { display: none }',
    style.setAttribute('data-hide-log-request', '')

    app.document.head.appendChild(style);
};

// Retornar false para impedir que o Cypress encerre o teste para o tipo de erro exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

// Alternatively you can use CommonJS syntax:
// require('./commands')