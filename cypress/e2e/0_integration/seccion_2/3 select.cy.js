/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')

describe("ejemplo select", () =>{

    it("select",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        cy.title("eq","Example: Accessibility Advanced | RodrigoVillanueva.com.mx")
        cy.wait(1000)      
        
         // puede ser con .check o con .click
        cy.get('#edit-webform-select-other-select').should("be.visible").select("Two").should("have.value","two")
        cy.wait(500)      
        cy.get('#edit-webform-select-other-select').should("be.visible").select("One").should("have.value","one")
        cy.wait(500)      
        cy.get('#edit-webform-select-other-select').should("be.visible").select("Three").should("have.value","three")   
    })


    it.only("selector multiple",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        cy.title("eq","Example: Accessibility Advanced | RodrigoVillanueva.com.mx")
        cy.wait(1000)      

        //por clase y contains form-control
        
         //combobox ejemplo correcto
        cy.get('.form-item-select-select2-multiple > .select2 > .selection > .select2-selection > .select2-selection__rendered')
        .should("be.visible").click()
        cy.wait(1500)
        //cy.get("#select2-edit-select-select2-multiple-result-k2up-one").should("be.visible").select(["one", "two"]).click()
        cy.get('#page-main-content').click(100,100)//solo atinar las coordenadas para atinarle
        cy.wait(1500)
        
                                    //nome jalo
    })
})// cierre describe