

describe("Alerts", () => {

    // Javascript Alert : It will some text and an 'OK' button

    // Javascript Confirmation : It will some text and an 'OK' and 'Cancel' button

    // Javascript Prompt : It will some text and an 'OK' and 'Cancel' button and a text field

    // Authentication Alert : It will some text and an 'OK' button and a text field

    it("Alert with OK", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button").contains("Click for JS Alert").click()

        cy.on("window:alert", (text) => {
            expect(text).to.equal("I am a JS Alert")
        })

        // Alert window will be closed automatically by cypress

        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    it("Alert with confirm", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button").contains("Click for JS Confirm").click()

        cy.on("window:confirm", (text) => {
            expect(text).to.equal("I am a JS Confirm")
        })

        // Alert window will be closed automatically by cypress

        cy.get("#result").should("have.text", "You clicked: Ok")
    })

    it("Alert with CANCEL", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button").contains("Click for JS Confirm").click()

        cy.on("window:confirm", (text) => {
            expect(text).to.equal("I am a JS Confirm")
        })

        cy.on("window:confirm", () => false)

        cy.get("#result").should("have.text", "You clicked: Cancel")
    })

    it("Alert with PROMPT", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("Hello")
        })

        cy.get("button").contains("Click for JS Prompt").click()

        cy.on("window:confirm", () => false)

        cy.get("#result").should("have.text", "You entered: Hello")
    })

    it.only("Basic Authentication Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password: "admin"
            }
        })

        cy.get(".example > p").should("have.contain", "Congratulations! You must have the proper credentials.")
    })
})
