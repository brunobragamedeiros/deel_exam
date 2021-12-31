/// <reference types="cypress" />


  /**
   *  I decided to show a real usage of the strategy that I proposed in the test plan assignment. So here we have the sanity strategy.
   *  Although in the assingment I created the strategy for the Individual Details, in here I used the Entity Details to show a small usage of the strategy.
   *  In this file there are testing regarding to groups of data, not individual fields and UI checks.
   *  Therefore, here we have wider tests, more focused on the flow and stability of the user flow.
   * 
   *  To develop the following tests I created an account that is still incomplete, so after the log in step, the Entity Details form is shown.
   *  I inserted the email and password of this account in the cypress.env.json for safety matters, so this information is seen only locally.
   */
  
  describe('Entity Details form', () => {
    const entityDetails = require('../support/data').EntityDetailsData;

     it('should not go forward: missing input data', () => { 
      cy.login('in_progress_user_email', 'in_progress_user_password')
      cy.intercept('https://api.deel.training/payments/account').as('accountPage'); //  
      cy.wait("@accountPage");  // wait for the api response above just to be sure that the flow is stable without the usage of a fixed amout of time
      cy.visit('/create-account/company')     
      cy.clearEntityDetails();
      cy.get('[data-qa="next"]').click()
      cy.get('[data-qa="next"]').should('be.visible') //if next is visible, it means that we have not moved forward
     })

     it('should go forward: filled fields', () => {
      cy.clearEntityDetails();
      cy.fillEntityDetails(entityDetails.companyName, entityDetails.registrationNumber, entityDetails.vat, entityDetails.street, entityDetails.city, entityDetails.zip)
      cy.get('[data-qa="next"]').click()
      cy.get('[data-qa="complete-profile"]').should('be.visible') //if complete profile button is visible, it means that we have moved forward
    })
  })


