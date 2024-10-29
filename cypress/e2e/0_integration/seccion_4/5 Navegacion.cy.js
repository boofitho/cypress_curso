Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
/// <reference types="Cypress"/> 
require('@4tw/cypress-drag-drop')
require('cypress-xpath')


describe("nagacion entre paginas", () =>{
    it("Back and Forward",()=>{
        cy.visit("https://cdnjs.com/")
        cy.title("eq","cdnjs - The #1 free and open source CDN built to make life easier for developers")
        cy.wait(1500)

        cy.get('.right > [href="/about"]').should("be.visible").click({force:true})
        cy.wait(1500)
        cy.get(':nth-child(6) > [href="/libraries"]').should("be.visible").click({force:true})
        cy.wait(1500)
        cy.go('back')
        cy.wait(1500)
        cy.go('back')

        cy.wait(1500)
        cy.go('forward')
        cy.wait(1500)
        cy.go('forward')
    }) 

    it.only("refresh",()=>{
        cy.visit("https://cdnjs.com/")
        cy.title("eq","cdnjs - The #1 free and open source CDN built to make life easier for developers")
        cy.wait(1500)

        cy.get('.right > [href="/about"]').should("be.visible").click({force:true})
        cy.wait(1500)
        cy.get(':nth-child(6) > [href="/libraries"]').should("be.visible").click({force:true})
        cy.wait(1500)

        cy.get('.ais-SearchBox-input').should("be.visible").type("store")
        cy.wait(1500)

        cy.reload()
        cy.wait(1500)

        cy.go("back")
    }) 
})// cierre describe