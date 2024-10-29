import ProyectoUno_PO from '../../../support/pageObjects/proyecto1_PO/proyecto1_PO';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

/// <reference types="Cypress"/> 

import 'cypress-file-upload'

describe("comandos personalizados", () =>{

    const master=new ProyectoUno_PO();

    master.VisitarPagina("https://validaciones.rodrigovillanueva.com.mx/Campos_Tres_OK.html", "Formulario de Ejemplo",1500)

    it("custom 1",()=>{
        
        cy.txtV("#phone","afasd",1000)
        cy.screenshot("prueba screenshot 1")
        cy.txtV("#noSpecialChars", "messi", 1500)
        cy.screenshot("prueba screenshot 2")
    })
})// cierre describe