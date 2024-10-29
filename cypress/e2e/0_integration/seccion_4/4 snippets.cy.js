Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
/// <reference types="Cypress"/> 
require('@4tw/cypress-drag-drop')
require('cypress-xpath')


describe("Configuracion y uso de los snippets", () =>{
    it("Snippet 1",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
        cy.title("eq","Demo: Application | RodrigoVillanueva.com.mx")
        cy.wait(1500)

        cy.get('#edit-contact-name').should("be.visible").type("Miguel")
        // no me jalo
    
    }) 
})// cierre describe