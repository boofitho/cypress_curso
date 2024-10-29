require('cypress-xpath')


describe("carga por fixture", () =>{

    before(()=>{
        cy.pagina("https://keycloak.bytesw.cloud:30001/operation-view", "Inicia sesión en jteller",1500)
        //if por si esta logeado que no carge el login 
      cy.loginTestR("mtoledo","Mtoledo2")
     
    })
    it("test uno cargando de Json",()=>{
        
        cy.fixture('datosR').then(testData =>{
            testData.forEach(data => {
                const d_cuenta=data.NoCuenta
                const d_Mfisico=data.montoFisico
                const d_Total=data.Total
                let codigo=700

                cy.wait(2500)
                cy.BuscarCodigo(700)     
               //01-000-000003-2
                cy.IngrCuetaXpath(d_cuenta)
  
                cy.FormDepMonF(d_Mfisico, d_Total)
        
                cy.confirmarR()

                cy.dashboard()


            })
        })
    })
})// cierre describe