describe('Screenshots tests and examples', () => {
    it('Open the testing page', () => {
        cy.openPage('https://devexpress.github.io/testcafe/example/');
    });

    it('Take a full page screenshot', () => {
        cy.screenshot({ capture: 'fullPage' })
    });

    it('Take a single element screenshot', () => {
        cy.get('header').screenshot()
    });
});