/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')

describe("ejemplo checkbox", () =>{

    it("checkbox1",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        cy.title("eq","Example: Accessibility Advanced | RodrigoVillanueva.com.mx")
        cy.wait(1500)      
    
        cy.get("//*[@id='edit-webform-checkboxes-other-checkboxes-one']").check().should("be.cheked")
        cy.get("//*[@id='edit-webform-checkboxes-other-checkboxes-one']").uncheck().should("not.be.checked")
        //no me jalo
    })

    it.only("checkbox1",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        cy.title("eq","Example: Accessibility Advanced | RodrigoVillanueva.com.mx")
        cy.wait(1500)      
        
        // puede ser con .check o con .click

        cy.get('#edit-webform-checkboxes-other-checkboxes-one').check().should("be.checked")
        cy.wait(500)
        cy.get('#edit-webform-checkboxes-other-checkboxes-two').check().should("be.checked")
        cy.wait(500)
        cy.get('#edit-webform-checkboxes-other-checkboxes-three').click()
        cy.wait(500)
        cy.get('#edit-webform-checkboxes-other-checkboxes-one').uncheck().should("not.be.checked")
        cy.wait(500)
        cy.get('#edit-webform-checkboxes-other-checkboxes-three').click()
    
    })
})// cierre describe