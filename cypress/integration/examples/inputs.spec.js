describe('Working with inputs', () => {
    it('Should open the test application', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

    it('Enter the username', () => {
        cy.get('input#user_login').clear()
        cy.log('username input cleared!')
        cy.get('input#user_login').type('admin@user.com', { delay: 50 })
    });

    it('Enter the password', () => {
        cy.get('input#user_password').clear()
        cy.log('password input cleared!')
        cy.get('input#user_password').type('lalala', { delay: 50 })
    });

    it('Submit the login form', () => {
        cy.get('input').contains('Sign in').click()
    });

    it('Should display an error message', () => {
        cy.get('div.alert.alert-error').should('be.visible')
    });
});