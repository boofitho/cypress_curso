/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("Hooks", () =>{

    before(()=>{
        cy.log("######## principio de todo ########")
        cy.visit("https://cdnjs.com/")
        cy.title("eq", "cdnjs - The #1 free and open source CDN built to make life easier for developers")
        cy.wait(2500)
    })

    // beforeEach(()=>{
    //     cy.log("Esto se repite en cada uno de los test muy importante")
    // })

    // afterEach(()=>{
    //     cy.log("Esto se hce al final de todos los test")
    // })

    // after(()=>{
    //     cy.log("######## Final de todo ########")
    // })


    it("test 1",()=>{
        cy.get('.ais-SearchBox-input').should("be.visible").type("store")
        cy.wait(2500)
    })

    it("test 2",()=>{
        cy.get('.ais-SearchBox-input').should("be.visible").clear()
        cy.wait(2500)
    })

    it("test 3",()=>{
        cy.get('.ais-SearchBox-input').should("be.visible").type("browser")
        cy.wait(2500)
    })


})// cierre describe