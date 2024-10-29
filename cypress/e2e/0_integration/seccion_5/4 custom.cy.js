Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

/// <reference types="Cypress"/> 
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'

describe("comandos personalizados", () =>{

    before(()=>{
        cy.log("######## principio de todo ########")
        cy.pagina("https://validaciones.rodrigovillanueva.com.mx/Campos_Tres_OK.html", "Formulario de Ejemplo",1500)
    })
    // beforeEach(()=>{
    //     cy.log("Esto se repite en cada uno de los test muy importante")
    // })

    // afterEach(()=>{
    //     cy.log("Esto se hce al final de todos los test")
    // })

    //  after(()=>{
    //      cy.log("######## Final de todo ########")
    //      cy.go("back")
    // })


//archivos comands parecido a snippet pero este si me jalo el de snippets no 

    it("custom 1",()=>{
        
        cy.txtV("#phone","afasd",1000)
     //   cy.validar_campoN("#phone", "Número de teléfono no válido", "telefono")
    // hsta que le doy enter muestra el mensaje no antes es diferente a la pagina del ejemplo opr eso no jala

        // cy.txtV_xpath("//input[contains(@id,'noSpaces')]", "miguel alonzo", 1000)
        // cy.validar_campo("//input[contains(@id,'noSpaces')]", "No debe contener espacios en blanco al inicio o al final", "espacio en blanco")

        cy.txtV("#noSpecialChars", "messi", 1500)
    })


})// cierre describe