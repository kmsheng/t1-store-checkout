// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Shopping Cart')
    cy.contains('Chicken momo')
    cy.contains('Spicy Mexican potatoes')
    cy.contains('Breakfast')
  })
})
