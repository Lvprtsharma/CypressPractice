
import 'cypress-iframe';
import '@4tw/cypress-drag-drop';


describe("Mouse Actions", () => {


    it.skip("Mouse Hover", () => {

        cy.visit("https://the-internet.herokuapp.com/hovers")

        cy.get("div.example > div:first-of-type").trigger("mouseover")

        cy.get("div.figure:first-of-type>div>h5").should("have.text", "name: user1")
    })


    it.skip("Right Click", () => {

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")

        cy.get(".context-menu-one.btn.btn-neutral").rightclick()

        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should("be.visible")
    
    })

    it.skip("Double Click", () => {

        cy.visit("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick")

        cy.frameLoaded("#iframeResult")

        cy.iframe("#iframeResult").find('[ondblclick="myFunction()"]').trigger("dblclick")

        cy.iframe("#iframeResult").find("#demo").should("have.text", "Hello World")

    })

    it("Drag and Drop", () => {

        cy.visit("https://www.way2automation.com/way2auto_jquery/droppable.php#load_box")

        cy.frameLoaded(".demo-frame:first")

        cy.iframe(".demo-frame:first").find("#draggable").drag("#droppable", {force: true})

    })






})