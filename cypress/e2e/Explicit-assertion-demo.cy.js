/**
 * Test suite demonstrating explicit assertions in Cypress using expect and assert
 * Shows both BDD (expect) and TDD (assert) style assertions
 */

describe('Explicit assertions demo - EXPECT', () => {

    /**
     * Test case demonstrating explicit assertions on OrangeHRM login
     * Verifies login success and user name using both BDD and TDD assertion styles
     */
    it('explicit assertions - expect', () => {
        // Navigate to OrangeHRM login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        // Login with admin credentials
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()
        
        // Verify successful login by checking URL
        cy.url().should('include', 'dashboard')
        
        // Get and verify the username using explicit assertions
        cy.get(".oxd-userdropdown-name").then((x) => {
            let expectedName = x.text()

            // BDD Style assertion using expect
            expect(expectedName).to.equal('Alexandre Schossler')

            // TDD Style assertion using assert
            assert.equal(expectedName, 'Alexandre Schossler')
        })

        // Navigate back using the chevron icon
        cy.xpath("(//i[@class='oxd-icon bi-chevron-left'])[1]").click()
    })
})