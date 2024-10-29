/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe("elementos de una tabla", () =>{

    it("tablas",()=>{
    
        //1ra. forma elijiendo el hijo
        cy.get(".elemento_padre").children(".clase_hijo").should("contain","contiene_texto").click({force:true})
        //2da. forma indicando el numero de elemento
        cy.get("[type='button']").eq(2).should("contain","Orange").click({force_true})
        //3ra. forma con filter
        cy.get("[type='button']").filter(".clase_hijo").click({force:true})
        cy.get("[type='button']").filter(".clase_hijo").should("contain","contiene_texto").click({force:true})
        //4ta. forma con find
        cy.get(".elemento_padre").find(".clase_hijo").should("contain","contiene_texto").click({force:true})
        //5ta. forma contains
        cy.get("[type='button']").contains("contiene_texto").click({force:true})
        //6ta. forma first y last
        cy.get(".elemento_padre").find(".clase_hijo").first().click({force:true})
        cy.get(".elemento_padre").find(".clase_hijo").last().click({force:true})
        //7ma. forma nextAll
        cy.get("[type='button']").should("contain","contiene_texto").nextAll().should("have.length", 4)
        //8va. forma elemento padre
        cy.get(".elemento_padre").parent().should("have.class","elemento_padre")
        //9na. forma check en todos los elementos                
        cy.get("[type='button']").eq(4).should("contain","All").click({force:true})
        cy.get("[type='button']").check({force:true})
        //10ma. forma con ciclo for
        for(let x=1; x<=4; x++){
            cy.get("[type='button']").eq(x).click({force:true})
            cy.get("[type='checkbox']").check({force:true})
        }
        //11va. forma con for y validaciones
        for(let x=1; x<=4; x++){
            let nombreboton=""

            if(x==1){
                nombreboton="Green"
            }else if(x==2){
                nombreboton="Orange"
            }else if(x==3){
                nombreboton="Red"
            }else if(x==4){
                nombreboton="All"
            }

            cy.get("[type='button']").eq(x).should("contain",nombreboton).click({force:true})
            cy.get("[type='checkbox']").check({force:true})
        }
        //12va. forma obtener datos de tabla
        const datos=[]
        let cantidadCLS=0

        cy.get("[role='row'] objeto_tabla").each(($el, index, $list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadCLS+=Number(datos[i])
                }
            }
            cy.log("la cantidad total es: "+cantidadCLS)
            expect(cantidadCLS).to.eq(202)
        })

        //13va. forma obtener un dato en especifico de una tabla 
        //variable directa
        const campo=cy.get("tbody > :nth-child(7) >:nth-child(2)")
        //cy.log(campo)
        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            cy.log(dato) //recibimos un texto

            if(dato.includes("texto_recibido")){
                campo.eq(index).next().next().then((variable_age)=>{ //.next() para pasar al la siguienete columna
                    const edad=age.text()
                    cy.log(edad)
                    cy.log("la edad de texto_recibido es: "+ edad)
                    expect(edad).to.eq('valor_esperado')
                })

            }
        }) 

    })              
})// cierre describe