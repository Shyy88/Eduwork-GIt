/// <reference types="cypress" />


describe('Working with inputs', () => {


    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    
    });
    

    it('Pay Bill', () => {
        cy.payBills()
    });


    
});
