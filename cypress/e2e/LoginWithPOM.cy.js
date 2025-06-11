import Login from "../PageObjects/LoginPage"

describe("Login with POM", () => {

    it.skip("Login without POM", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.login("Admin", "admin123")

    })

    it.only("Login with POM", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        let login = new Login()

        login.setUsername("Admin")

        login.setPassword("admin123")

        login.clickSubmit()

        login.verifyLogin()

    })

})