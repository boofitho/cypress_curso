/// <reference types="Cypress"/> 
require('cypress-xpath')

describe("Tipos de selectores", () =>{

    it("selector por id, atributo y xpath",()=>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Campos_Uno_OK.html")
        cy.title("eq","Formulario de Ejemplo")            
        cy.wait(1500)

        //por ID "#obligatorio"
        cy.get("#obligatorio").should("be.visible").type("the goat")
        cy.wait(1500)

        //por atributo [placeholder='Mínimo 5 caracteres'] se cambian las "" por comillas '' y denbe ir entre []
        cy.get("[placeholder='Mínimo 5 caracteres']").should("be.visible").type("messi")
        cy.wait(1500)

        //por xpath //*[@id="maxLength"] se cambian las "" por comillas '' y denbe ir entre
        cy.xpath("//*[@id='maxLength']").should("be.visible").type("BARCELONA!")
        cy.wait(1500)

        //utilizando las extensiones estan level God! chroxpath y truepath
        cy.get("#onlyNumbers").should("be.visible").type(223310)
        cy.wait(2500)
    })

    it("selector contains",()=>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html")
        cy.title("eq","Formulario de Ejemplo")            
        cy.wait(1500)

        //por clase y contains form-control
        /*
         //combobox ejemplo correcto
        cy.get('#company').should("be.visible").select("Canon").should("have.value","15")
        
        cy.get(".form-group").contains("Valor 2").click()
        cy.wait(1500)
        cy.get(".form-group").contains("Valor 1").click()
        cy.wait(1500)
        cy.get(".form-group").contains("Valor 3").click()
        cy.wait(1500)*/

    })

    it.only("selector copy-selector",()=>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Campos_Uno_OK.html")
        cy.title("eq","Formulario de Ejemplo")            
        cy.wait(1500)

        //por ID "#obligatorio"
        cy.get("#obligatorio").should("be.visible").type("the goat")
        cy.wait(1500)

    })


})// cierre describe