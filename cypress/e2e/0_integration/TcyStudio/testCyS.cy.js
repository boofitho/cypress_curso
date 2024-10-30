Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    

describe("bienbenido a mi hola mundo att boof", () =>{

    it("mi primer test -> hi world",()=>{
        cy.log("hola mundo")
        cy.wait(3000)     
    
    })

    it("segundo test -> campo name", ()=>{
        cy.visit("https://demoqa.com/text-box")

        /* ==== Generated with Cypress Studio ==== */
        
        cy.get('#userName').type('miguel alonzo');
        cy.get('#userEmail').type('boof@gmail.com');
        cy.get('#currentAddress').type("esto es una prueba");
        cy.get('#permanentAddress').type("esto es la otra prueba");
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    })

})// cierre describe