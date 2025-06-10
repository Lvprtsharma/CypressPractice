

describe("Capture Screenshot", () => {

    it.skip("Capture Screenshot", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        // Directly capture the element
        cy.get(".orangehrm-login-branding").screenshot("Logo")

        // Capture the entire page
        cy.screenshot("LoginPage")

        cy.login("Admin", "admin123")


    })

        // Capture the screenshot on failure automatically -- Only when executed through cli
        it.only("Capture Screenshot on Failure", () => {

        cy.visit("https://demo.nopcommerce.com/")

        cy.get("ul[class='top-menu notmobile'] li:nth-child(4) a:nth-child(1)").should("have.text", "Admin")

    })

})