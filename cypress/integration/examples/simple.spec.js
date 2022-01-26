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