

describe("My Test Suite", () => {

    before(() => {

        cy.log("***** Launch application *****")


    })

    after(() => {
        cy.log("***** Close application *****")
    })


    beforeEach(() => {
        cy.log("***** Logging in *****")
    })

    afterEach(() => {
        cy.log("***** Logging out *****")
    })

    after(() => {
        cy.log("***** Close application *****")
    })

    it("Search", () =>{

        cy.log("***** Search *****")

    })

    it("Advanced Search", () =>{
        
        cy.log("***** Advanced Search *****")
        
    })


    it("Listing Products", () =>{

        cy.log("***** Listing Products *****")
        
    })


})