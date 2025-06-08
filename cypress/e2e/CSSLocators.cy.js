/**
 * Test suite demonstrating the usage of CSS selectors in Cypress
 * These tests verify elements using various CSS selectors on an e-commerce website
 */

describe('CSS Locators', () => {
  /**
   * Test case to demonstrate product search functionality
   * Uses ID selector for search input, name attribute for submit button,
   * and class selector for verifying search results
   */
  it('should be able to find an element by class name', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.get('#search_query_top').type("T-shirts")

    cy.get('[name="submit_search"]').click()

    cy.get('.lighter').contains('T-shirts').should('be.visible')
    
  })
}) 