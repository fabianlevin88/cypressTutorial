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

Cypress.Commands.add('openPage', (page) => {
    cy.clearCookies({ log: true })
    cy.clearLocalStorage({ log: true })
    cy.visit(page)
})

Cypress.Commands.add('enterUsername', (username) => {
    cy.get('input[id=user_login]').as('username')
    cy.get('@username').clear()
    cy.log('username input cleared!')
    cy.get('@username').type(username)
})

Cypress.Commands.add('enterPassword', (password) => {
    cy.get('input[id=user_password]').as('password')
    cy.get('@password').clear()
    cy.log('password input cleared!')
    cy.get('@password').type(password)
})


