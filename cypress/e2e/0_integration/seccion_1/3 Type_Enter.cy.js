
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

/// <reference types="Cypress"/> 

describe("type enter", () =>{

    it("Type -> Enter ", ()=>{
        cy.visit("https://www.google.com/")  
        cy.title().should('eq',"Google")
        cy.wait (1500)
        cy.log("titulo correcto")

        cy.get("[name='q']").type("cypress io {enter}")        
                                            //{enter} pra dar enter 
                                            
        cy.wait (1500)
        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
        //click({force:true}) para forzar el click
    })
})// cierre describe