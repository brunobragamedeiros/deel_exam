Cypress.Commands.add('fillEntityDetails', (companyName, registrationNumber, vat, street, city, zip) => { 
    cy.get('input[name="companyName"]').type(companyName)
    cy.get('input[name="registrationNumber"]').type(registrationNumber)
    cy.get('[data-qa="vat-id-input"]').type(vat)
    cy.get('input[name="street"]').type(street)
    cy.get('input[name="city"]').type(city)
    cy.get('input[name="zip"]').type(zip)
 })


Cypress.Commands.add('clearEntityDetails', () => { 
    cy.get('input[name="companyName"]').clear()
    cy.get('input[name="registrationNumber"]').clear()
    cy.get('[data-qa="vat-id-input"]').clear()
    cy.get('input[name="street"]').clear()
    cy.get('input[name="city"]').clear()
    cy.get('input[name="zip"]').clear()
 })

 
