/**
 * Test suite for demonstrating radio button and checkbox interactions in Cypress
 * Tests various scenarios of selecting, unselecting, and verifying form controls
 */

describe("Radio and Checkbox", () => {

    /**
     * Test case for radio button interactions
     * Demonstrates switching between male and female radio buttons
     * and verifying their checked states
     */
    it("Radio and Checkbox", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Test male radio button selection
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

        // Test female radio button selection
        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')

        // Test switching back to male radio button
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')
    })

    /**
     * Test case for individual checkbox interactions
     * Demonstrates checking and unchecking specific day checkboxes
     * and verifying their visibility and states
     */
    it("Checkbox", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Test Sunday checkbox
        cy.get("#sunday").should('be.visible')
        cy.get("#sunday").check().should('be.checked')

        // Test Monday checkbox with check and uncheck
        cy.get("#monday").should('be.visible')
        cy.get("#monday").check().should('be.checked')
        cy.get("#monday").uncheck().should('not.be.checked')

        // Test Friday checkbox
        cy.get("#friday").should('be.visible')
        cy.get("#friday").check().should('be.checked')

        // Test Wednesday checkbox
        cy.get("#wednesday").should('be.visible')
        cy.get("#wednesday").check().should('be.checked')
    })

    /**
     * Test case for bulk checkbox operations
     * Demonstrates checking/unchecking all checkboxes at once
     * and selecting first/last checkboxes specifically
     */
    it("check all checkboxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Check all checkboxes at once
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        // Uncheck all checkboxes at once
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // Check only the first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

        // Check only the last checkbox
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})