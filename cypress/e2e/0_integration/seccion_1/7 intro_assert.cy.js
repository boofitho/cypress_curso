describe("intoduccion a los assert", () =>{

    it("demo de los assert",()=>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")  
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)
       
        cy.get('#nombre').should("be.visible").type("miguel")
        cy.wait(1000)
        cy.get('#apellidos').should("be.visible").type("alonzo")
        cy.wait(1000)
        cy.get('#tel').should("be.visible").type(5236039272)
        cy.wait(1000)
        cy.get('#email').should("be.visible").should("be.enabled").type("correo@dominio.com")

    })
})// cierre describe