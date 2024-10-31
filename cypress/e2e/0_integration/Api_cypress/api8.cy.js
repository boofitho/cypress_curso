/// <reference types="Cypress"/> 
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe("Test Api PUT", () =>{

    // it("Test Api delete metodo 2 ",()=>{
    //     cy.request({
    //         method: "DELETE",
    //         url: "http://localhost:3000/posts/18"
    //     }).then(response =>{
    //         expect(response.status).to.eql(200)
    //     })
    // })
    it.only("Test Api delete varios ",()=>{
        for(let x=9; x<=15; x++)
        {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/"+x
        }).then(response =>{
            expect(response.status).to.eql(200)
        })
        }
    })

})// cierre describe