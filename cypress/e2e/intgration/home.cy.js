
describe('home page', ()=>{
    it('deve exibir a home page', ()=>{
        cy.viewport(1440, 900)
        cy.visit('/')
    })
})