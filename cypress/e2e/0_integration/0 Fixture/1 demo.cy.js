import ProyectoUno_PO from '../../../support/pageObjects/proyecto1_PO/proyecto1_PO';

import 'cypress-file-upload'

describe("comandos personalizados", () =>{

    const master=new ProyectoUno_PO();

    master.VisitarPagina("https://validaciones.rodrigovillanueva.com.mx/index.html", "Formulario de Ejemplo",1500)

    it("custom 1",()=>{
        cy.txtV("#nombre", "Miguel", tiempo) 
    })
})// cierre describe