/// <reference types="Cypress"/> 
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe("Test Api POST", () =>{

    it("Test Api POST",()=>{
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body:{
                "id": 4,
                "title": "Insertando un valor en cypress Api",
                "author": "Boof"
            }
        }).then(response =>{
            expect(response.status).to.eql(201)
        })
    })
})// cierre describe