/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("upload imagenes", () =>{

    it("cargamdo imagenes",()=>{
        cy.visit("url")
        cy.title("eq","title_url")
        cy.wait(1500)
   
        const ruta='cntrm.jpg'
        //lo pasamos por el typo
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(1500)
    })

  
})// cierre describe