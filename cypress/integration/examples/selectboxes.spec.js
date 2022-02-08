describe('Select box tests', () => {
    it('Should open the page', () => {
        cy.openPage('https://devexpress.github.io/testcafe/example/');
    });

    it('Should select the option BOTH from the interface select box', () => {
        cy.get('select[id=preferred-interface]').as('interfaceSelector')
        cy.get('@interfaceSelector').select('Both')
          .should('have.value', 'Both')
    });

    it('Should select the option JavaScript from the interface select box', () => {
        cy.get('select[id=preferred-interface]').as('interfaceSelector')
        cy.get('@interfaceSelector').select('JavaScript API')
          .should('have.value', 'JavaScript API')
    });
});