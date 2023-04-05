// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (username, password) => {
//     cy.clearCookie()
//     cy.clearLocalStorage()
//     cy.get('#user_login').clear()
//     cy.get('#user_login').type(username)

//     cy.get('input[name="user_password"]').clear
//     cy.get('input[name=#user_password]').type(password)

//     cy.contains('input[name="submit"]').click()
// }) 

Cypress.Commands.add('payBills', () => {
    cy.get('#sp_payee').select('Bank of America').should('have.value', 'bofa')
    cy.get('#sp_account').select('Checking').should('have.value', '2')
    cy.get('#sp_amount').type('100')
    cy.get('input[name="date"').type('2023-04-05')
    cy.get('#sp_description').click({force: true}).type('Internet Bills')
    cy.get('#pay_saved_payees').click()
}) 