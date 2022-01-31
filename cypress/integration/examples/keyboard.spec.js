describe('Keyboard press simulation', () => {
    it('Open the google page', () => {
        cy.visit('https://google.com.ar')
    });

    it('Should submit searchbox with pressing enter', () => {
        cy.get('input[name=q]').as('searchBar')
        cy.fixture('googleSearch').then((element) => {
            cy.get('@searchBar')
              .type(element.search)
              .type('{enter}')
        })
    });
});