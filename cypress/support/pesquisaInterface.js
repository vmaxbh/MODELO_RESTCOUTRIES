Cypress.Commands.add('petethompson', () => {
    cy.visit('/')
})

Cypress.Commands.add('campoPesquisaBrasil', () => {
    cy.get('#search-box').type('Brasil')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'BR')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'BRA')
    cy.get(':nth-child(3) > td').should('contain', 'BRL')
    cy.get(':nth-child(4) > td').should('contain', '55')
    cy.get(':nth-child(5) > td').should('contain', 'por')
    cy.wait(3000)

})

Cypress.Commands.add('campoPesquisaArgentina', () => {
    cy.get('#search-box').type('Argentina')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'AR')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'ARG')
    cy.get(':nth-child(3) > td').should('contain', 'ARS')
    cy.get(':nth-child(4) > td').should('contain', '54')
    cy.get(':nth-child(5) > td').should('contain', 'grnspa')
    cy.wait(3000)

})

Cypress.Commands.add('campoPesquisaPortugal', () => {
    cy.get('#search-box').type('Portugal')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'PT')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'PRT')
    cy.get(':nth-child(3) > td').should('contain', 'EUR')
    cy.get(':nth-child(4) > td').should('contain', '351')
    cy.get(':nth-child(5) > td').should('contain', 'por')
    cy.wait(3000)

})

Cypress.Commands.add('campoPesquisaMexico', () => {
    cy.get('#search-box').type('Mexico')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'MX')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'MEX')
    cy.get(':nth-child(3) > td').should('contain', 'MXN')
    cy.get(':nth-child(4) > td').should('contain', '52')
    cy.get(':nth-child(5) > td').should('contain', 'spa')
    cy.wait(3000)

})

Cypress.Commands.add('campoPesquisaEUA', () => {
    cy.get('#search-box').type('Estados Unidos')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'US')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'USA')
    cy.get(':nth-child(3) > td').should('contain', 'USDUSNUSS')
    cy.get(':nth-child(4) > td').should('contain', '1')
    cy.get(':nth-child(5) > td').should('contain', 'eng')
    cy.wait(3000)

})

Cypress.Commands.add('campoPesquisaChina', () => {
    cy.get('#search-box').type('China')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'CN')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'CHN')
    cy.get(':nth-child(3) > td').should('contain', 'CNY')
    cy.get(':nth-child(4) > td').should('contain', '86')
    cy.get(':nth-child(5) > td').should('contain', 'cmn')
    cy.wait(3000)

})

Cypress.Commands.add('campoPesquisaJapao', () => {
    cy.get('#search-box').type('Japão')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'JP')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'JPN')
    cy.get(':nth-child(3) > td').should('contain', 'JPY')
    cy.get(':nth-child(4) > td').should('contain', '81')
    cy.get(':nth-child(5) > td').should('contain', 'jpn')
    cy.wait(3000)

})

Cypress.Commands.add('campoPesquisaRussia', () => {
    cy.get('#search-box').type('Russia')
    cy.get('tbody > :nth-child(1) > .ng-binding').should('contain', 'RU')
    cy.get('tbody > :nth-child(2) > .ng-binding').should('contain', 'RUS')
    cy.get(':nth-child(3) > td').should('contain', 'RUB')
    cy.get(':nth-child(4) > td').should('contain', '7')
    cy.get(':nth-child(5) > td').should('contain', 'rus')
    cy.wait(3000)

})