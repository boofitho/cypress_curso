/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'

describe("each", () =>{

    it("for",()=>{
        
//        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-basic")     
//        cy.get('#edit-textfield').type("miguel")
        for(let i=1; i<=10; i++){
            cy.log("miguel")            
        }

        for(let i=2; i<=100; i=i+2){
            cy.log(i)            
        }
    })

    it("each uno",()=>{
    cy.get(".clase").each(($el, index, $list)=>{
        //            cy.log(index)
        //            cy.log($el)
        //            cy.log($list)
        
                    cy.log($el.text())
                    let vestido = $el.text()
                })
            })
    
    it("each dos",()=>{
    cy.get(".clase").each(($el, index, $list)=>{
                    
        //cy.log($el.text())
            let vestido = $el.text()

            if(vestido.includes("tenga_en_texto")){
                cy.wrap($el).click()
            }    
    
        })
    })
 
    it("each tres",()=>{
        cy.visit("url")
        cy.title("eq","title_url")
        cy.wait(1500)
                //para una tienda de ropa ejemplo
        const datos=[];

        cy.get(".clase_del_producto").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
         
                for(let x=0; x<=datos.length; x++){
                cy.get("#id_de_los_productos .clase_del_producto").eq(x).click({force:true}) //abrira el primer elemento que encuentre    
                cy.wait(1500)
                cy.get("#quantity").should("be.visible").clear().type("4") 
                cy.wait(1500)
                cy.get("#grupo_talla").select("M").should("have.value","2")
                cy.wait(1500)
                cy.get(".clase_exclisive > span").should("be.visible")
                cy.wait(1500)
                cy.xpath("ruta_xpath").click({force:true})
                cy.wait(1500)
                cy.get(".clas_icon_home").should("be.visible").click({force:true})
            }    
        })
    })
        
                    
})// cierre describe