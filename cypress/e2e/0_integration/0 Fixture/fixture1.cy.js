describe("carga por fixture", () =>{

    before(()=>{
        cy.pagina("https://validaciones.rodrigovillanueva.com.mx/index.html", "Formulario de Ejemplo",1500)
    
        cy.fixture('datos2').then(function(data){
            globalThis.data=data
        })
    })
    it("test uno cargando de Json",()=>{
        let tiempo=400

        cy.txtV("#nombre", data.nombre,  tiempo) 
        cy.txtV("#apellidos", data.apellido,  tiempo) 
        cy.txtV("#tel", data.telefono,  tiempo) 
        cy.txtV("#email", data.email,  tiempo) 
        cy.txtV("#direccion", data.direccion,  tiempo) 
        cy.clickF(".btn-primary")
        cy.wait(tiempo)
        cy.clickF(".btn-secondary")
    })
})// cierre describe