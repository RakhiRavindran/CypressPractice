///<reference types = 'cypress'/>
describe('PolarisTestsuit', () =>{
    beforeEach(() => {
        // Prevent uncaught exceptions from causing test failures
        cy.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent the error from failing the test
            return false;
        });
    });
    it('LaunchPolaris QA',() =>{
        cy.visit('https://polaris-qa-evp.eloci.us/');
        cy.title().should('eq','Elo');
        cy.url().should('include','polaris-qa');
        cy.get('#outlined-basic').should('exist').type('rakhi.test164+qa.50@gmail.com');
        cy.get('#password').should('exist').type('Test@123');
        cy.get('.MuiButton-label').click();
       

    });

});