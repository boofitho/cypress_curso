
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

/// <reference types="Cypress"/> 

describe("Type pageUp and PageDown ", () =>{

    it.only("type pageUp primero ", ()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")  
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.wait(1500)
    
        cy.get("#edit-contact-name").type('{pageup}')
        cy.wait(1500)    
    })

    it("type pageDown ", ()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")  
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.wait(1500)
    
        cy.get("#edit-contact-name").type('{pagedown}')
        cy.wait(1500)    
    })
    it("type pageUp ", ()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")  
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.wait(1500)
    
        cy.get("#edit-contact-name").type('{pageup}')
        cy.wait(1500)    
    })

    it("type pageDown ", ()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")  
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.wait(1500)
    
        cy.get("#edit-contact-name").type('{pagedown}')
        cy.wait(1500)    
    })
    it("type pageUp ", ()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")  
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.wait(1500)
    
        cy.get("#edit-contact-name").type('{pageup}')
        cy.wait(1500)    
    })

    it.only("type pageDown ultimo", ()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")  
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
        cy.wait(1500)
    
        cy.get("#edit-contact-name").type('{pagedown}')
        cy.wait(1500)    
    })

})// cierre describe