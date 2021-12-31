   /*
   *  In this file there is the test that was required in the assingment. 
   */

  describe('Fixed Rate', () => {
   const contractData = require('../support/data').fixedRateData;

     it('should create a fixed rate contract', () => {
      // arrange data
      const expectedStatus = 'WAITING FOR CLIENT SIGN'

      // act
      cy.login('user_email', 'user_password');
      cy.intercept('https://api.deel.training/transactions/graph?limit=1m').as('homepage'); 
      cy.wait("@homepage"); // wait for the api response above just to be sure that the flow is stable without the usage of a fixed amount of time 
      cy.visit('/create/fixed');   
      cy.fillGeneralInfo(contractData.name, contractData.country, contractData.province, contractData.jobTitle, contractData.seniority, contractData.scope);
      cy.fillPaymentDetails(contractData.currency, contractData.rate, contractData.frequency);
      cy.fillDefineDates();
      cy.fillBenefitsAndExtra(contractData.specialClause);
      cy.fillCompliance();

      //assert (these asserts are just some checks to assure the info is the expected)
      cy.get('.contract-layout-status').should('have.text', expectedStatus)
      cy.get('[data-qa="contract-type"]').should('have.text', contractData.type)
      cy.get('[data-qa="job-title"]').should('have.text', contractData.jobTitle)
     })

    
})


