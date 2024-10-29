Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("Hooks", () =>{

    before(()=>{
        cy.log("######## principio de todo ########")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title("eq", "OrangeHRM")
        cy.wait(2500)
    })

    // beforeEach(()=>{
    //     cy.log("Esto se repite en cada uno de los test muy importante")
    // })

    // afterEach(()=>{
    //     cy.log("Esto se hce al final de todos los test")
    // })

     after(()=>{
         cy.log("######## Final de todo ########")
         cy.go("back")
    })



    it("test 1",()=>{
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click({force:true})
        cy.wait(1500)
    })

    it("test 2",()=>{
        cy.get(':nth-child(6) > .oxd-main-menu-item').should("be.visible").click({force:true})
        cy.wait(1500)
    })

    it("test 3",()=>{
        cy.get(':nth-child(10) > .oxd-main-menu-item').should("be.visible").click({force:true})
        cy.wait(1500)
    })


})// cierre describe