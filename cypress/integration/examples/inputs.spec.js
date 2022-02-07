describe('Working with inputs', () => {
    it('Should override the current time', () => {
      const date = new Date(2022, 31, 10).getTime() // return a timestamp
      cy.clock(date)
      cy.log(date)
    })
    
    it('Should open the test application', () => {
        cy.openPage('http://zero.webappsecurity.com/login.html')
        cy.title().should('include', 'Zero - Log in')
    });

    it('Enter the username', () => {
        cy.fixture('user').then((user) => {
            cy.enterUsername(user.username)
        })
    });

    it('Enter the password', () => {
        cy.fixture('user').then((user) => {
            cy.enterPassword(user.password)
        })
    });

    it('Click on the checkbox', () => {
        cy.get('input[type=checkbox]').click()
    });

    it('Submit the login form', () => {
        cy.get('input').contains('Sign in').click()
    });

    it('Should display an error message', () => {
        cy.get('div[class*=alert-error]')
          .should('be.visible')
          .and('contain', 'Login and/or password are wrong.')
    });
});