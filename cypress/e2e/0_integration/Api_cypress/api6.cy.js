/// <reference types="Cypress"/> 
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe("Test Api POST", () =>{

    it("Test Api post metodo 2 ",()=>{
        for(let x=1; x<=10; x++){
            let tx=Math.random().toString(10)
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body:{
                    "id": 8+x,
                    "title": "titulo "+tx,
                    "author": "boof:"+tx
                }
            }).then(response =>{
             expect(response.status).to.eql(201)
            })
        }
    })
})// cierre describe