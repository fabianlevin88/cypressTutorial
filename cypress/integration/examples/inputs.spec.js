describe('Working with inputs', () => {
    it('Should open the test application', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

    it('Enter the username', () => {
        cy.get('input[id=user_login]').as('username')
        cy.get('@username').clear()
        cy.log('username input cleared!')
        cy.get('@username').type('admin@user.com', { delay: 50 })
    });

    it('Enter the password', () => {
        cy.get('input[id=user_password]').as('password')
        cy.get('@password').clear()
        cy.log('password input cleared!')
        cy.get('@password').type('lalala', { delay: 50 })
    });

    it('Click on the checkbox', () => {
        cy.get('input[type=checkbox]').click()
    });

    it('Submit the login form', () => {
        cy.get('input').contains('Sign in').click()
    });

    it('Should display an error message', () => {
        cy.get('div[class*=alert-error]').should('be.visible')
    });
});