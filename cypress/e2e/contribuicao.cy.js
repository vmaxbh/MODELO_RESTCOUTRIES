describe('Área do Projeto', () => {
    beforeEach(() => {
        cy.restPaises() 
    });

    it('Confirmações de informações do Projeto', () => {
        cy.contributing()
        cy.donations()
        
    });
    
});