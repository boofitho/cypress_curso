
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

/// <reference types="Cypress"  />     

describe("seccion 1 validando titulo ", () =>{

    it("test validar titulo de pagina", ()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")  
        cy.title().should('eq','Demo: Application | RodrigoVillanueva.com.mx')
    
        cy.log("funciono title aceptada")   
    
    })

})// cierre describe