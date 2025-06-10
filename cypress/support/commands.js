// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

/// <reference types="cypress-xpath"/>

import 'cypress-iframe';

require('@4tw/cypress-drag-drop')

Cypress.Commands.overwriteQuery('contains', (originalFn, selector, filter, text, options) => {
    if (typeof text === 'object') {
        options = text
        text = options.text
        filter = undefined
    }
    options = options || {}
    options.matchCase = false
    return originalFn(selector, filter, text, options)
})

Cypress.Commands.add("launchApplication", (url) => {
    cy.visit(url)
})

Cypress.Commands.add("clickLink", (label) => {
    cy.get('a').contains(label).click()
})

Cypress.Commands.add("login", (username, password) => {
    cy.get("input[placeholder='Username']").type(username)
    cy.get("input[placeholder='Password']").type(password)
    cy.get("button[type='submit']").click()
})

Cypress.Commands.add("logout", () => {
    cy.get(".oxd-userdropdown-tab").click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
})

Cypress.Commands.add("clickElement", (element) => {
    cy.get(element).click()
})

Cypress.Commands.add("typeElement", (element, text) => {
    cy.get(element).type(text)
})

Cypress.Commands.add("verifyElement", (element, text) => {
    cy.get(element).should("have.text", text)
})

Cypress.Commands.add("verifyElementNotPresent", (element) => {
    cy.get(element).should("not.exist")
})

Cypress.Commands.add("verifyElementPresent", (element) => {
    cy.get(element).should("exist")
})

Cypress.Commands.add("verifyElementVisible", (element) => { 
    cy.get(element).should("be.visible")
})

Cypress.Commands.add("verifyElementNotVisible", (element) => {
    cy.get(element).should("not.be.visible")
})

Cypress.Commands.add("verifyElementEnabled", (element) => {
    cy.get(element).should("be.enabled")
})

Cypress.Commands.add("verifyElementDisabled", (element) => {
    cy.get(element).should("be.disabled")
})

Cypress.Commands.add("verifyElementSelected", (element) => {
    cy.get(element).should("be.selected")
})

Cypress.Commands.add("verifyElementNotSelected", (element) => {
    cy.get(element).should("not.be.selected")
})