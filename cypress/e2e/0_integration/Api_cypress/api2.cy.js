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
            "Direccion": "Guatemala mi casita",
            "Cursos":[
                {
                "Nombre":"Php",
                "Descripcion": "Lenguaje de prograacion PHP"
                },
                {
                    "Nombre":"Java",
                    "Descripcion": "Lenguaje de prograacion Java"
                },
                {
                    "Nombre":"Python",
                    "Descripcion": "Lenguaje de prograacion Python"
                },    
            ]
        }

         cy.log(datos.Nombre)
        cy.log(datos.ApellidoP)
        cy.log(datos.ApellidoM)
        cy.log(datos.Telefono)
        cy.log(datos.Direccion)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[0])
        cy.log(datos.Cursos[2].Nombre)
        cy.log(datos.Cursos[2].Descripcion)
    })
})// cierre describe