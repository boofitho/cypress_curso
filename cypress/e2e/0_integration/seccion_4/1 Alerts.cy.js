/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("Alertas en cypress", () =>{
    it("Alerta 1",()=>{
        cy.visit("url")
        cy.title("eq","title_url")
        cy.wait(1500)
   
        cy.on("window:alert", (str)=>{
            expect(str).to.equal("Texto_esperado")
            return true;

            cy.xpath("xpath").click({force:true})//para cerrar o guardar alertas etc 
        })
    })

  
})// cierre describe