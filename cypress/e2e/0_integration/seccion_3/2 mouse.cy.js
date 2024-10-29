/// <reference types="Cypress"/> 

require('@4tw/cypress-drag-drop')


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe("evento mouse", () =>{

    it("drag and drop",()=>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Drag_Drop_ok.html")
        cy.title("eq","Formulario de Ejemplo")
        cy.wait(3000)      
        
        cy.get("#dragElement").drag("#dropZone") //no me jalo
        cy.wait(5000)
    })

    it.only("drag and drop range",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-basic")
        cy.title("eq","Example: Accessibility Basic | RodrigoVillanueva.com.mx")
        cy.wait(1500)  
        
   //para cuando tenemos presonar y deslizar ejemplo de 0 a 100 
     cy.get('#edit-range').invoke("attr","value", "-90")


    })
   /* it("mouse over",()=>{
        cy.visit("https://www.way2automation.com/")
        cy.title("eq","Get Online Selenium Certification Course | Way2Automation")
        cy.wait(1000)      
        //cerrar ventana emergente
       // cy.get(".eicon-close").should("be.visible").click() 
    //    cy.wait(1000)
        //posicionarse en un lugar para desplegar menu
        
        cy.get("#menu-item-27617").trigger('mouseover').click() //no jalo
        cy.wait(3000)
        cy.get("#menu-item-27617").trigger('mouseover').click() //no jalo
        cy.wait(3000)
        cy.get(".eicon-close").should("be.visible").click() 
        cy.get("#menu-item-27617").trigger('mouseover').click() //no jalo
        cy.wait(3000)
        cy.get("#menu-item-27619").trigger('mouseover').click()



    })*/
})// cierre describe