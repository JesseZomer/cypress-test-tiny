/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.banner').console('info').should('contain.text', 'Kitchen Sink');
    cy.get('.banner').console(cy.get('.navbar-header')).should('contain.text', 'Kitchen Sink');
  })
})
