/// <reference types="Cypress"/> 
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe("Demo de una API", () =>{

    it("Test Api uno ",()=>{
        
        const datos={
            "Nombre": "Miguel",
            "ApellidoP": "Alonzo",
            "ApellidoM": "Lemus",
            "Telefono": "36039272",
            "Direccion": "Guatemala mi casita"
            //"Cursos":[{

        //     // }
        // ]
        }

        cy.log(datos["Nombre"])
        cy.log(datos["ApellidoP"])
        cy.log(datos["ApellidoM"])
        cy.log(datos["Telefono"])
        cy.log(datos["Direccion"])
    
    })
})// cierre describe