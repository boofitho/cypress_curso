/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("Hooks", () =>{

    before(()=>{
        cy.log("######## principio de todo ########")
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test muy importante")
    })

    afterEach(()=>{
        cy.log("Esto se hce al final de todos los test")
    })

    after(()=>{
        cy.log("######## Final de todo ########")
    })


    it("test 1",()=>{
            cy.log("test uno")
    })

    it("test 2",()=>{
        cy.log("test dos")
    })


})// cierre describe