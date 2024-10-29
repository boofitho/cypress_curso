/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')

describe("ejemplo Asserts", () =>{

    it.only("Asserts",()=>{
        cy.visit("url")
        cy.title("eq","titulo_de_url")
        cy.wait(1000)      
        
        //contains
//        cy.get("#atributo").contains("Contiene_x").click()

        //first selecciona el primero de la clase
//        cy.get(".class").first()
 
        //find y eq - este eq(0) seria como un array si tuviera varios elementos seleccion segun la posicion del array
//        cy.get(".clase").find(".clase_2").eq(0).click()

        //que contenga X texto con la funcion "have.text" ejemplo
//        cy.get(#atributo_name).should("have.text","nombre:miguel")

        //que contenga X texto con la funcion "contain.text" ejemplo
//        cy.get(#atributo_name).should("contain.text","miguel")

        //que contenga X texto con la funcion "contain.value" ejemplo
//        cy.get(#atributo_name).should("contain.value","miguel")

        //que contenga X texto con la funcion "have.value" ejemplo
//        cy.get(#atributo_name).should("contain.value","miguel")

        //que contenga X clase con la funcion "have.class" ejemplo
/*       cy.get(#atributo_name).should("have.class","algo_clase").then(()=>{
            cy.get("#atributo_name").type("miguel")
    })
*/
        //ejemplo con AND
/*       cy.get(#atributo_name).should("be.visible").and("have.class","algo_clase").then(()=>{
            cy.get("#atributo_name").type("miguel")
    })
*/
        //ejemplo no.have.class
/*       cy.get(#atributo_name).should("be.visible").and("not.have.class","algo_clase").then(()=>{
            cy.get("#atributo_name").type("miguel")
    })
*/
        //ejemplo have.legth validar el largo de un oobjeto y have.css
//       cy.get(#atributo_name >tr >td).should("be.visible").should("have.legth",numero).and("have.css", "padding", "8px")   

        //ejemplo cy.contains
//       cy.contains("[type='button']", "texto_bouton-ejemplo-show-message").should("be.visible").click({force:true})   



//igaul que el anterior mas que indique si es nuevo etc...
//        cy.get(".clase").find(".clase_2").eq(0).click()

        //validando estado     
/*        cy.get("#atributo .clase").then((e)=>{
            cy.log(e.text())
            let estado = e.text()
            cy.log(estado)
            if (estado=="new"){
                cy.log("el vestido es nuevo")
            }
        })

        cy.get("#atributo").then((e)=>{
            cy.log(e.text())
            let variable_precio=e.text()
            //slice para quitar el $, Q, etc si es que lo tubiera unicamente nos quedariamos con el valor de precio 
            variable_precio=variable_precio.slice(1,5)
            //aqui lo mismo que el anterior pero si decimals
            variable_precio=variable_precio.slice(1,3)
            if(variable_precio>30){
                cy.log("el vestido es mayor al presupuesto")
                //nos regresa a la pantalla anterior
                cy.xpath("xpath").click()
            }else{
                cy.log("el vestido entra en el presupuesto")    
                cy.log("#atributo_agregar_carrito").click()
            }
        })*/

            //invoke place holder
       /* cy.get("#atributo").invoke("attr", "placeholder").should("contain","texto_contenido").then(()=>{
            cy.get("#atributo").type(variable)

            //invoke css style
        cy.get("#atributo").invoke("attr", "style","color:blue").should("contain","texto_contenido").then(()=>{
            cy.get("#atributo").type(variable)
        
        })*/

    })
})// cierre describe