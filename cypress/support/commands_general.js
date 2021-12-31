Cypress.Commands.add('login', (email, password) => { 
    cy.visit('/login')
    cy.get("input[name='email']").type(Cypress.env(email), {log: false})
    cy.get("input[name='password']").type(Cypress.env(password), {log: false})
    cy.get("[data-qa='log-in']").click()
 })
