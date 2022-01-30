describe('Challenge One', () => {
    it('Should visit the books page', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.log('Before reloading')
        cy.reload()
        cy.log('Webpage successfully loaded!')
    });

    it('Should click on the poetry section', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry').should('be.visible')
    });

    it('Should click on the Olio book', () => {
        cy.get('.product_pod').invoke('attr', 'title').contains('Olio').click()
        cy.get('p[class="price_color"]').contains('£23.88')
    });
});