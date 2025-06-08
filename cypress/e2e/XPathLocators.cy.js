/**
 * Test suite demonstrating the usage of XPath locators in Cypress
 * These tests verify elements using XPath selectors on an e-commerce website
 */

describe('XPath Locators', () => {
  /**
   * Test case to verify the number of products in a category
   * Uses XPath to locate product list items and checks their count
   */
  it('should be able to find an element by xpath', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=8&controller=category')
    cy.xpath("//ul[@class='product_list grid row']/li").should('have.length', 5) 
  })
})