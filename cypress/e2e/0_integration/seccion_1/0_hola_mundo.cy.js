
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
        cy.get("#userName").type("Miguel")
        cy.wait(3000)     

    })

})// cierre describe