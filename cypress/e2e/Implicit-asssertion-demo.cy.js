/**
 * Test suite demonstrating different types of implicit assertions using should/and
 * These tests verify various aspects of the OrangeHRM demo site including URLs,
 * page titles, elements, and form interactions
 */

describe('Implicit assertions demo - SHOULD', () => {
    /**
     * Test case to verify URL includes specific text
     * Uses basic 'include' assertion
     */
    it('implicit assertions - should include', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive')
    })

    /**
     * Test case to verify exact URL match
     * Uses strict equality assertion
     */
    it('implicit assertions - should equal', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    /**
     * Test case to verify URL contains specific text
     * Uses 'contain' assertion which is similar to 'include'
     */
    it('implicit assertions - should contain', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive')
    })

    /**
     * Test case demonstrating chaining multiple assertions using 'should'
     * Shows how to verify multiple conditions on the same element
     */
    it('implicit assertions - multiple assertions with should', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive')
        .should('include', 'orangehrmlive')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    /**
     * Test case demonstrating chaining multiple assertions using 'and'
     * Shows an alternative way to chain assertions that is more readable
     */
    it('implicit assertions - multiple assertions with and', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrmlive')
        .and('include', 'orangehrmlive')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    /**
     * Test case demonstrating negative assertions
     * Shows how to verify that something is NOT present
     */
    it('implicit assertions - not assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('not.contain', 'oranehrmlive')
    })

    /**
     * Test case demonstrating multiple assertions on page title
     * Shows different ways to verify the page title content
     */
    it('implicit assertions - multiple assertions for title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')
        .and('not.contain', 'HRM1')
    })

    /**
     * Test case demonstrating element count assertions
     * Verifies the number of links present on the page
     */
    it('implicit assertions - find all links', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//a').should('have.length', 5)
    })

    /**
     * Test case demonstrating form field assertions
     * Shows how to verify visibility, enabled state, and input value
     */
    it('implicit assertions - check username field', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        // Verify field properties before interaction
        cy.get("input[name='username']").should('be.visible')
        .and('be.enabled')

        // Type into the field
        cy.get("input[name='username']").type('Admin')

        // Verify the input value
        cy.get("input[name='username']").should('have.value', 'Admin')
    })
})