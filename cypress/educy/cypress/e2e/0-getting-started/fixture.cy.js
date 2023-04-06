/// <reference types="cypress" />

describe('Working with inputs', () => {


    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.contains('Swag Labs')
    });

    it('Should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type("problem_user")
    });

    it('Should fill password', () => {
        cy.get('input[name="password"]').clear
        cy.get('input[name="password"]').type('password')
    });

    it('Should try to login', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('input[name="password"]').clear
            cy.get('input[name="password"]').type(password)

            cy.get('input[name ="login-button"]').click()

            cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        });
    });

    it('Home page', () => {
            cy.get('#user-name').clear()
            cy.get('#user-name').type('standard_user')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('secret_sauce')

            cy.get('input[name ="login-button"]').click()
            cy.url().should('include', 'inventory.html')
            cy.contains('Products')
        });

    it('Should try to add cart', () => {
        cy.get('#item_4_title_link').should('contain.text', 'Sauce Labs Backpack').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        });

}); 