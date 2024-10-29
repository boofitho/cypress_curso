describe("carga por fixture", () =>{

    before(()=>{
        cy.pagina("https://validaciones.rodrigovillanueva.com.mx/index.html", "Formulario de Ejemplo",1500)
    })
    it("test uno cargando de Json",()=>{
        let tiempo=250
        cy.fixture('MOCK_DATA').then(testData =>{
            testData.forEach(data => {
                const d_nombre=data.nombre
                const d_apellido=data.apellido
                const d_telefono=data.telefono
                const d_email=data.email
                const d_direccion=data.direccion
            
                cy.txtV("#nombre", d_nombre,  tiempo) 
                cy.txtV("#apellidos", d_apellido,  tiempo) 
                cy.txtV("#tel", d_telefono,  tiempo) 
                cy.txtV("#email", d_email,  tiempo) 
                cy.txtV("#direccion", d_direccion,  tiempo) 
                cy.clickF(".btn-primary")
                cy.wait(2000)
                cy.clickF('.btn-secondary')
            })
        })
    })
})// cierre describe