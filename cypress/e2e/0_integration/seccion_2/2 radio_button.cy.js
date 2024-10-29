/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')

describe("ejemplo radio button", () =>{

    it.only("radio buton",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        cy.title("eq","Example: Accessibility Advanced | RodrigoVillanueva.com.mx")
        cy.wait(1000)      
        
         // puede ser con .check o con .click
        cy.get('#edit-webform-radios-other-radios-one').click()
        cy.wait(500)      
        cy.get('#edit-webform-radios-other-radios-two').check()
        cy.wait(500)      
        
    })
})// cierre describe