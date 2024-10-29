/// <reference types="Cypress"/> 
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Segundo reto", () =>{

    it("probando app",()=>{
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title("eq","Computers database")
        
        //buscar
        cy.xpath("//*[@id='searchbox']").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1500)
        
        //agregar
        cy.get('#add').should("be.visible").click()
        cy.get('#name').should("be.visible").type("ACER").tab().
        type("1991-03-22").tab().
        type("1999-03-22")
        //combobox
        cy.get('#company').should("be.visible").select("Canon").should("have.value","15")
        cy.get('.primary').should("be.visible").click()
    
    })
})// cierre describe