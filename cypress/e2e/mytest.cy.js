/**
 * Basic test suite demonstrating title verification in Cypress
 * These tests check the page title of the OrangeHRM demo site
 */

describe('My First Test', () => {
    /**
     * Positive test case to verify correct page title
     */
    it('verify title-positive', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    })

    /**
     * Negative test case to demonstrate failure when title doesn't match
     * Expected to fail as the title doesn't match the assertion
     */
    it('verify title-negative', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM123')
    })          
})
