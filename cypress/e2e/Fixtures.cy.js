

describe("My Test Suite", () => {


    // Direct access to the fixture
    it.skip("Fixture Demo Test", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture("example.json").then((data) => {

        cy.get("input[name='username']").type(data.username)

        cy.get("input[name='password']").type(data.password)

        cy.get("button[type='submit']").click()

        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should("have.text", data.expected)

        })
    })


    before(() =>{
        cy.fixture('example.json').then((data) =>{ 

            cy.log(data.username)
            cy.log(data.password)
            cy.log(data.expected)

            global.userdata = data

        })
    })

    // Accessing the fixture using hooks
    it.only("Fixture Demo Test", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[name='username']").type(userdata.username)

        cy.get("input[name='password']").type(userdata.password)

        cy.get("button[type='submit']").click()

        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should("have.text", userdata.expected)

    })

    


})