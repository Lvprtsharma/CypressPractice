/**
 * Test suite demonstrating different types of implicit assertions using should
 * These tests verify various URL assertions on the OrangeHRM demo site
 */

describe('Implicit assertions demo - SHOULD', () => {
    /**
     * Test case to verify URL includes specific text
     */
    it('implicit assertions - should include', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive')
    })

    /**
     * Test case to verify exact URL match
     */
    it('implicit assertions - should equal', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    /**
     * Test case to verify URL contains specific text
     */
    it('implicit assertions - should contain', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive')
    })

    /**
     * Test case demonstrating chaining multiple assertions
     */
    it('implicit assertions - multiple assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive')
        .should('include', 'orangehrmlive')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
})