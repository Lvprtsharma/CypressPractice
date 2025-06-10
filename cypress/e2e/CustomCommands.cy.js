

describe("Custom Commands", () => {

    it("Custom Commands", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.login("Admin", "admin123")

        cy.logout()

    })

})