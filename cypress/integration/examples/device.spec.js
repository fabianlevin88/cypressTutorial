describe('Device Tests', () => {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('https://google.com.ar')
    });

    it('1080p', () => {
        cy.viewport(1980, 1080)
        cy.visit('https://google.com.ar')
    });

    it('iPhone X', () => {
        cy.viewport('iphone-x')
        cy.visit('https://google.com.ar')
    });

    it('iPad Mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('https://google.com.ar')
    });

    it('Macbook 15', () => {
        cy.viewport('macbook-15')
        cy.visit('https://google.com.ar')
    });
});