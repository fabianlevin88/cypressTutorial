describe('My first simple test with cypress', () => {
    
    it('Example of passing test', () => {
        expect(true).to.equal(true)
    })
})

describe('Failling test example', () => {
    it('Example of failling test', () => {
        expect(true).to.equal(false)
    })
})

describe('Browser Actions', () => {
    it('should load correct URL', () => {
        cy.visit('http://example.com', { timeout: 10000 })
    
    })

    it('should check correct URL', () => {
        cy.url().should('include', 'example.com')
    })

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
    })

    it('Should check for the same element but using xpath', () => {
        cy.xpath('//h1').should('be.visible')
    })
})

describe('Implicit waits, pause and debug', () => {
    it('Should wait for 3 seconds', () => {
        cy.visit('http://example.com', { timeout: 10000 })
        cy.wait(3000)
    })

    it('Should pause the execution', () => {
        cy.pause()
    })
})