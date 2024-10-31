/// <reference types="Cypress"/> 
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe("Test Api GET", () =>{

    it("Test Api GET ",()=>{
        let datos;
        datos=cy.request("http://localhost:3000/posts") 

        datos.its("status").should("equal", 200)
    })
    
    it("Test Api GET 2 ",()=>{
        let datos;
        datos=cy.request("http://localhost:3000/posts").should((Response)=>{
            expect(Response.status).to.eq(200)
        })
    })
    it("Test Api get metodo 2 ",()=>{
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept: "application/json"
            }
        }).then(response =>{
            let datos;
            datos=JSON.parse(JSON.stringify(response.body))
            
            cy.log(datos)
            
            expect(datos[0]).has.property("title", "cypress")
            expect(datos[0]).has.property("author", "Miguel")
        })
    })
})// cierre describe