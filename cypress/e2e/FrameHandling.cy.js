

describe("Window Handling", () => {

    it.skip('Approach 1: Using custom command', () => {

        cy.visit("https://demo.automationtesting.in/Frames.html")

        const iframe = cy.get("#singleframe")
                         .its('0.contentDocument.body')
                         .should('be.visible')
                         .then(cy.wrap);

        iframe.clear().type("Hello World")        

    })

    it.only('Approach 2: Using iFrame plugin', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr');

        cy.iframe('#mce_0_ifr').find('body').clear().type("Hello World");
        
    })

})