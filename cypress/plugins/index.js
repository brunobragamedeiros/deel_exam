/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
  };