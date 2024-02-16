describe('Input Campo de Pesquisa Interface Countries', () => {
    beforeEach(() => {
        cy.petethompson()
    });

    it('Validações Pesquisa Brasil', () => {
        cy.campoPesquisaBrasil()
    });

    it('Validações Pesquisa Argentina', () => {
        cy.campoPesquisaArgentina()
    });
    it('Validações Pesquisa Portugal', () => {
        cy.campoPesquisaPortugal()
    });

    it('Validações Pesquisa Mexico', () => {
        cy.campoPesquisaMexico()
    });

    it('Validações Pesquisa EUA', () => {
        cy.campoPesquisaEUA()
    });

    it('Validações Pesquisa China', () => {
        cy.campoPesquisaChina()
    });
    it('Validações Pesquisa Japão', () => {
        cy.campoPesquisaJapao()
    });
    it('Validações Pesquisa Russia', () => {
        cy.campoPesquisaRussia()
    });
    

   
    
});