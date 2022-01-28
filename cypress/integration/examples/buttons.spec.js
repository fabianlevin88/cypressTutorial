describe('Buttons and links examples', () => {
    it('Should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
    });

    it('Should click on the travel category', () => {
        cy.get('a').contains('Travel').click()

        cy.get('h1').contains('Travel').should('be.visible')
    });

    it('Should display the correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    });
});