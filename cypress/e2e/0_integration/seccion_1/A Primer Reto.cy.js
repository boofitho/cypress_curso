/// <reference types="Cypress"/> 
require('cypress-plugin-tab')

describe("Primer reto", () =>{

    it(" ",()=>{
        //entrar a sitio
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Datatables2_ok.html")
        //validar titulo
        cy.title("eq","Formulario de Ejemplo")     
        //tima un breack de 1.5s-1500
        cy.wait(1500)

        //agregar registro
        cy.get("#btnAdd").should("be.visible").click({force:true})
        cy.wait(1500)
        cy.get("#nombre").should("be.visible").type("Miguel")
        .tab().type("33 {enter}")
        cy.wait(1500)
        //agregar 2do. registro
        cy.get("#btnAdd").should("be.visible").click({force:true})
        cy.wait(1500)
        cy.get("#nombre").should("be.visible").type("Messi")
        .tab().type("35 {enter}")
        cy.wait(1500)

        //para ubicarnos en el search y colocar Juan
        cy.get("#example_filter > label > input[type=search]").
        should("be.visible").type("Messi")
        cy.wait(2500)

        cy.get("#example_filter > label > input[type=search]").
        should("be.visible").clear()
        
        //editar registro
        cy.get("#example > tbody > tr.even > td:nth-child(4) > button.btn.btn-warning.btnEdit")
        .should("be.visible").click({force:true})
        cy.wait(1500)
        cy.get("#nombre").should("be.visible")
        .clear().type("Bicho")
        .tab().clear().type("39 {enter}")
        cy.wait(1500)

        //eliminar registro
        cy.get("#example > tbody > tr:nth-child(3) > td:nth-child(4) > button.btn.btn-danger.btnDelete")
        .should("be.visible").click({force:true})
        cy.wait(1500)
        
    })
})// cierre describe