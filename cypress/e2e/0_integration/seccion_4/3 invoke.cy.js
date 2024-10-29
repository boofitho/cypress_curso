Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
/// <reference types="Cypress"/> 
require('@4tw/cypress-drag-drop')
require('cypress-xpath')


describe("Invoke", () =>{
    it("invoke 1",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
        cy.title("eq","Demo: Application | RodrigoVillanueva.com.mx")
        cy.wait(1500)
        //invoke se representa con el .invoke() jala el texto que este en la pantalla del elemento dicho
        cy.get("#edit-contact-information > h2").invoke("text").as("info")
        cy.get("@info").should("contain","Contact Information")  
        
        cy.xpath("//*[@id='edit-contact--wrapper']/div/div[1]/label").invoke("text").as("titulo_name")
        cy.get("@titulo_name").should("contain","Name").then(()=>{
            cy.get("#edit-contact-name").type("miguel angel")
        })
    })

    it("invoke estilos",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
        cy.title("eq","Demo: Application | RodrigoVillanueva.com.mx")
        cy.wait(1500)
        //invoke se representa con el .invoke()
        cy.xpath("//*[@id='edit-contact--wrapper']/div/div[1]/label").invoke("attr","style","color:blue; font-size:50px ")    
    })

    it("invoke ocultar y mostrar",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
        cy.title("eq","Demo: Application | RodrigoVillanueva.com.mx")
        cy.wait(1500)
        //invoke se representa con el .invoke("hide") and ("show") se le puede colocar atributo "5s" cinco segundos etc
        cy.xpath("//*[@id='edit-contact--wrapper']/div/div[1]/label").invoke("hide","5s")  
        cy.wait(1500)
        cy.get("#edit-contact-name").invoke("hide")
        cy.wait(1500)

        cy.xpath("//*[@id='edit-contact--wrapper']/div/div[1]/label").invoke("show")  
        cy.wait(1500)    
        cy.get("#edit-contact-name").invoke("show","5s")
    })

    it("invoke src",()=>{
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
        cy.title("eq","Demo: Application | RodrigoVillanueva.com.mx")
        cy.wait(1500)
        
        //invoke se representa con el .invoke("attr","src") validamos si hay imagenes en la pagina
        cy.get('[src="/themes/notech_subtheme/logo.png"]').invoke("attr","src").should("include","logo.png")
    })    

    it.only("invoke target",()=>{
        cy.visit("URL")
        cy.title("eq","titulo_URL")
        cy.wait(1500)
        
        //invoke se representa con el .invoke("removeAttr","target") evita que abra otra pestaña 
        cy.xpath(xpath).invoke("removeAttr","target").click({force:true})
    }) 
})// cierre describe