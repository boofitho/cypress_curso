
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });


/// <reference types="Cypress"/> 
require('cypress-plugin-tab')

describe("funcion tab", () =>{

    it("type con tab", ()=>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")  
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(2000)
    
        cy.get('#nombre').type("miguel").tab().
        type("alonzo").tab().
        type(5036039272).tab().
        type("correo@dominio.com").tab().
        type("Barcelona mi casita {enter}")
    })

})// cierre describe