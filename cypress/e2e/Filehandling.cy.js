import 'cypress-file-upload';

describe("File Handling", () => {
    

    it.only("Single File Upload", () => {

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile("example.json")

        cy.get("#file-submit").click()

        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")

        cy.get("#uploaded-files").should("contain", "example.json")


    })

    it.only("File Upload - rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile({filePath: "example.json", fileName: "example1.json", mimeType: "application/json"})

        cy.get("#file-submit").click()

        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")

    })

    it.only("File Upload - using drag and drop", () => {

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#drag-drop-upload").attachFile("example.json", {subjectType: "drag-n-drop"})

        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
        .should("have.text", "example.json")

    })

    it.only("Multiple File Upload", () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        cy.get('#filesToUpload').attachFile(["example.json", "example2.json"])

        cy.get('.demo-wrapper>p:last-of-type>strong').should("have.text", "Files You Selected:")

    })

    it.only("File Upload - shadow DOM", () => {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')

        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile("example.json")

        cy.get('.smart-item-name', {includeShadowDom: true}).contains("example.json")

    })

})