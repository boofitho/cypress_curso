/// <reference types="Cypress"/> 
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe("Test Api PUT", () =>{

    it("Test Api put metodo 2 ",()=>{
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/1",
            body:{
                "title": "Modificando un valor ejercicio api7",
                "author": "Rodri balon de oro"
            }
        }).then(response =>{
            expect(response.status).to.eql(200)
        })
        
    })
})// cierre describe