/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe("fechas", () =>{
    it("fecha",()=>{
        
        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-basic")
        cy.title("eq","Example: Accessibility Basic | RodrigoVillanueva.com.mx")
        cy.wait(1500)  
        
        cy.get('#edit-date').should("be.visible").type("1991-03-22")
        cy.get('#edit-datetime-date').should("be.visible").type("1991-03-22")
        cy.get('#edit-datetime-time').should("be.visible").type("07:33")
        cy.get('#edit-datelist-year').should("be.visible").select("1991")
        cy.get('#edit-datelist-month').should("be.visible").select("Mar")
        cy.get('#edit-datelist-day').should("be.visible").select("22")
        cy.get('#edit-datelist-hour').should("be.visible").select("12")
        cy.get('#edit-datelist-minute').should("be.visible").select("22")
        cy.get('#edit-webform-time').should("be.visible").type("01:33")
        cy.get('#edit-date-elements').click(400,200)     

    })
})// cierre describe