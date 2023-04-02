/// <reference types='Cypress' />

describe('task page', () => {
  it('should render img', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.main-header img')
  })

  it('should display the page title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').contains(new RegExp('My Cypress Course Tasks', 'i'))
  })
})
