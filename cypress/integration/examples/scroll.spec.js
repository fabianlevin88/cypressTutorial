describe('Scroll inside the page', () => {
    it('Open the page', () => {
        cy.openPage('https://devexpress.github.io/testcafe/example/');
    });

    it('Scroll down the page', () => {
        cy.get('button[id=submit-button]').scrollIntoView()
    });

    it('Scroll up the page', () => {
        cy.get('header').scrollIntoView()
    });
});