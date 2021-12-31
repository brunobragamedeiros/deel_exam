  /**
   *  I decided to show a real usage of the strategy that I proposed in the test plan assignment. So here we have the regression strategy.
   *  Although in the assingment I created the strategy for the Individual Details screen, in here I used the Entity Details to show a small usage of the strategy.
   *  In this file there are detailed tests that serves as a tool to increase the confidence that the UI is working as expected and the verification of the data is being executed.
   *  I created the tests only to one field, the Legal Company Name, but the idea is to extensively test the fields and form behavior.
   * 
   *  To develop the following tests I created an account that is still incomplete, so after the log in step, the Entity Details form is shown.
   *  I inserted the email and password of this account in the cypress.env.json for safety matters, so this information is seen only locally.
   */

  describe('Sign Up Form - Entity Details', () => {
    
  describe('Field: Legal Company Name', () => {
     it('should show it has an error: companyName = {}', () => {
      cy.login('in_progress_user_email', 'in_progress_user_password')
      cy.intercept('https://api.deel.training/payments/account').as('accountPage'); //  
      cy.wait("@accountPage");  // wait for the api call above just to be sure that the flow is stable without the usage of fixed timing
      cy.visit('/create-account/company') 
      cy.get("[data-qa='companyName']").should('be.visible')
      cy.get("[data-qa='companyName']").clear()
      cy.get("[data-qa='companyName']").type('{}')
      cy.get("[data-qa='next']").click()
      // the assert below checks for the usage of the expected class (error class) and the expected border-color in rgb
      cy.get("[data-qa='companyName']").click().should('have.class', 'deel-ui__input-component__input deel-ui__input-component__input_placeholder deel-ui__input-component__input_error')
      cy.get("[data-qa='companyName']").click().should('have.css','border-color').and('eq', 'rgb(227, 0, 4)')     })

     it('should show it has an error: companyName is blank', () => {
      cy.get("[data-qa='companyName']").clear()
      cy.get("[data-qa='next']").click()
      cy.get("[data-qa='companyName']").click().should('have.class', 'deel-ui__input-component__input deel-ui__input-component__input_placeholder deel-ui__input-component__input_error')
      cy.get("[data-qa='companyName']").click().should('have.css','border-color').and('eq', 'rgb(227, 0, 4)')
    })

    it('should be accessible', () => {
      cy.injectAxe();
      cy.checkA11y(null, { includedImpacts: ['critical'] }); // this accessibility check is only looking for critical problems on the page
     })
  })
})


