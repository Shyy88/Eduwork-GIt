Cypress.Commands.add('payBills', () => {
    cy.get('#sp_payee').select('Bank of America').should('have.value', 'bofa')
    cy.get('#sp_account').select('Checking').should('have.value', '2')
    cy.get('#sp_amount').type('100')
    cy.get('input[name="date"').type('2023-04-05')
    cy.get('#sp_description').click({force: true}).type('Internet Bills')
    cy.get('#pay_saved_payees').click()
}) 