Cypress.Commands.add('fillGeneralInfo', (name, country, province, jobTitle, seniority, scope) => { 
    cy.get("input[name='name']").type(name);
    cy.get('[data-qa="contractor-tax-residence"]').eq(0).type(country.substring(0,3))
    cy.get('.deel-ui__select__menu').contains(country).click()
    cy.get('[data-qa="contractor-tax-residence-province"]').type(province.substring(0,3))
    cy.get('.deel-ui__select__menu').contains(province).click()
    cy.get("input[name='jobTitle']").type(jobTitle);
    cy.get('[data-qa="selector-seniority-level"]').type(seniority.substring(0,3))
    cy.get('.deel-ui__select__menu').contains(seniority).click()
    cy.get("textArea[name='scope']").type(scope);
    cy.get('.deel-ui__calendar-input-container__input_content_value').click() // opens the calendar
    cy.get('.react-calendar__tile--active') // finds the day that is active, in other words: the current date
    .invoke('index') 
    .then((i) => { // keeps the index of this date (the first day displayed starts in index 0, so there is no need of doing -1)
        cy.log(i)
        cy.get('.react-calendar__month-view__days > :nth-child('+i+') > abbr').click() //the day before today will always be selected, regardless the month configuration
    });
    cy.get('[data-qa="next"]').click()
 })
 
Cypress.Commands.add('fillPaymentDetails', (currency, rate, frequency) => { 
    cy.get('[data-qa="currency-select"]').type(currency.substring(0,3))
    cy.get('.deel-ui__select__menu').contains(currency).click()
    cy.get("input[name='rate']").type(rate);
    cy.get('[data-qa="cycle-select"]').eq(0).type(frequency.substring(0,3))
    cy.get('.deel-ui__select__menu').contains(frequency).click()
    cy.get('[data-qa="next"]').click()
 })

 Cypress.Commands.add('fillDefineDates', () => { 
    cy.get('[data-qa="next"]').click()
 })

 Cypress.Commands.add('fillBenefitsAndExtra', (specialClause) => { 
    cy.get('[data-qa="add-a-special-clause"]').click()
    cy.get('.textarea-container').type(specialClause)
    cy.get('[data-qa="next"]').click()
 })

 Cypress.Commands.add('fillCompliance', () => { 
    cy.get('[data-qa="create-contract"]').click()
 })