/**
 * Test suite for demonstrating different types of dropdown handling in Cypress
 * Covers select dropdowns, custom dropdowns, auto-suggest, and dynamic dropdowns
 */

describe("Dropdowns", () => {

    /**
     * Test case for handling standard HTML select dropdowns
     * Demonstrates selecting an option and verifying the selection
     */
    it.skip("Dropdowns with select tag", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#country")
        .select("India")
        .should('have.value', 'india')
    })

    /**
     * Test case for handling custom dropdowns without select tag
     * Demonstrates clicking to open dropdown, typing value, and verifying selection
     */
    it.skip("Dropdowns without select tag", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()

        cy.get(".select2-search__field").type("India").type("{enter}")

        cy.get("#select2-billing_country-container").should('have.text', 'India')
    })

    /**
     * Test case for handling auto-suggest dropdowns
     * Demonstrates typing in search field and selecting from suggestions
     */
    it.skip("Auto suggest dropdown", () => {
        cy.visit("https://www.wikipedia.org/")

        cy.get("input#searchInput").type("Delhi")

        cy.get(".suggestion-title").contains("Delhi University").click()
    })

    /**
     * Test case for handling dynamic Google search suggestions
     * Demonstrates typing, waiting for suggestions, iterating through results,
     * and selecting a specific suggestion
     */
    it("Dynamic dropdown", () => {
        cy.visit("https://www.google.com/")

        cy.get("textarea[name='q']").type("cypress automation")

        cy.wait(3000)  // Wait for suggestions to load

        // Iterate through each suggestion and click if it matches the target text
        cy.get("div.wM6W7d > span").each(($el) => {
            const text = $el.text()
            cy.log(text) // Logs in Cypress runner
            if (text === "cypress automation example") {
                cy.wrap($el).click({force: true})
            }
        })

        // Verify the selected suggestion is in the search box
        cy.get("textarea[name='q']").should("have.value", "cypress automation example")
    })
})