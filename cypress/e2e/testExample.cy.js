///<reference types = 'cypress'/>
describe('TestSuit', () =>{
    it('launchOPenCart',() =>{
        cy.visit('https://naveenautomationlabs.com/opencart/')
        cy.title().should('eq','Your Store')
        cy.url().should('include','opencart')
        cy.get('.form-control').should('exist').type('Mac')
        cy.get('.input-group-btn > .btn > .fa').click()
        cy.contains('mac').click();
       

    })
    /*it('Visibility of Element' , ()=>{
        
    })*/

})