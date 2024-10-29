Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
/// <reference types="Cypress"/> 
require('@4tw/cypress-drag-drop')

describe("Alias", () =>{
    it("Alias 1",()=>{
        cy.visit("url")
        cy.title("eq","title_url")
        cy.wait(1500)
        //alias se representa con el .as() acorta la variable #first_name a @nom
        cy.get("#first_name").should("be.visible").as("nom")
        cy.get("@nom").type("miguel")
        
    })

})// cierre describe