/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')

describe("Referencia windows", () =>{

    it("windows Charset",()=>{  
        cy.visit(URL)
        cy.title().should("eq","title_url")
        cy.wait(1500)

        cy.document().should("have.property","charset").and('eq','UTF-8')
    })

    it("windows Charset",()=>{  
        cy.visit(URL)
        cy.title().should("eq","title_url")
        cy.wait(1500)
        // colocamos la parte final del url/parte-final.html
        cy.url().should("include","parte-final.html")
        // incluimos toda la url eq
        cy.url().should("eq","https://www.url.com/parte-final.html")
    })
})// cierre describe