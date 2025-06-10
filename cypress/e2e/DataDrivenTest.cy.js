

describe("Data Driven Test", () => {

    it("Data Driven Test", () => {

        cy.fixture("orangehrm.json").then((data) => {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((user) => {

                cy.get("input[name='username']").type(user.username)

                cy.get("input[name='password']").type(user.password)

                cy.get("button[type='submit']").click()

                if (user.expected == "Dashboard") {

                    cy.wait(4000)

                    cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should("have.text", user.expected)

                    cy.wait(2000)

                    cy.get(".oxd-userdropdown-tab").click()

                    cy.wait(2000)
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    
                } else {
                    cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("have.text", user.expected)
                }

            })
        })
    })

})