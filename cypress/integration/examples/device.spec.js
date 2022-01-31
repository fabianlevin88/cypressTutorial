describe('Device Tests', () => {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('http://wwww.example.com')
    });

    it('1080p', () => {
        cy.viewport(1980, 1080)
        cy.visit('http://wwww.example.com')
    });

    it('iPhone X', () => {
        cy.viewport('iphone-x')
        cy.visit('http://wwww.example.com')
    });

    it('iPad Mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('http://wwww.example.com')
    });

    it('Macbook 15', () => {
        cy.viewport('macbook-15 ')
        cy.visit('http://wwww.example.com')
    });
});