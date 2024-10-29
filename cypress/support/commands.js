// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  cy.visit('/login'); // URL de tu página de login
  cy.get("#username").should('be.visible').type(user)
  cy.get("#password").should('be.visible').type(pass)
  cy.wait(500)
  cy.clickF('#kc-login')

  // Esperar hasta que el login sea exitoso y se redirija a la página principal
  cy.url().should('include', '/dashboard');
});

Cypress.Commands.add('isLoggedIn', () => {
  // Verificar si la cookie de sesión está presente (puedes cambiarla según cómo gestiones sesiones)
  cy.getCookie('session_id').then(cookie => {
    if (!cookie) {
      // Si no está logueado, llamar a la función de login
      cy.login();
    }
  });
});



Cypress.Commands.add('loginTestR', (user, pass) => { 
   cy.get("#username").should('be.visible').type(user)
   cy.get("#password").should('be.visible').type(pass)
   cy.wait(500)
   cy.clickF('#kc-login')
})

Cypress.Commands.add('BuscarCodigo', (codigo) => { 
   cy.get('input[name="code"]').should("be.visible").type(codigo)
   cy.wait(2500)
   cy.get('input[name="code"]').should("be.visible").type("{enter}")
})

Cypress.Commands.add('IngrCuetaXpath', (cuenta) => { 
   cy.xpath("//input[contains(@id,'Número de cuenta')]").should("be.visible").type(cuenta)
   cy.wait(500)
   cy.clickF('.bg-secondary > .mat-button-wrapper > .mat-icon')
   cy.wait(6000)
})

Cypress.Commands.add('FormDepMonF', (montofisico, total) => { 
   cy.txtV_xpathwt("//input[contains(@id,'Efectivo fisico')]", "{selectall}{backspace}")
   cy.wait(500)
   cy.txtV_xpathwt("//input[contains(@id,'Efectivo fisico')]", montofisico)
   cy.txtV_xpathwt("//input[@id='Total']", "{selectall}{backspace}")
   cy.wait(500)

   //suma total
   cy.txtV_xpathwt("//input[@id='Total']", total)
   cy.wait(500)
   cy.clickF('.btn-container > .bg-main.ng-star-inserted')
   cy.wait(1500)
})

Cypress.Commands.add('confirmarR', () => { 
   cy.clickF('.text-right > .mat-focus-indicator > .mat-button-wrapper')   
   cy.wait(1500)

})

Cypress.Commands.add('dashboard', () => { 
   cy.clickF('.mat-toolbar > .d-flex > .mat-focus-indicator > .mat-button-wrapper > .material-icons')
   cy.wait(2500)
})




Cypress.Commands.add('txtVwt', (Selector, texto) => { 
   cy.get(Selector).should ('be.visible').type(texto)
   cy.wait(300)
})

Cypress.Commands.add('txtV_xpathwt', (xpath, texto) => { 
   cy.xpath(xpath).should ('be.visible').type(texto)
   cy.wait(300)
})

















Cypress.Commands.add('txtV', (Selector, texto, tiempo) => { 
   cy.get(Selector).should ('be.visible').type(texto)
   cy.wait(tiempo)
})

 Cypress.Commands.add('txtV_xpath', (xpath, texto, tiempo) => { 
    cy.xpath(xpath).should ('be.visible').type(texto)
    cy.wait(tiempo)
 })

 Cypress.Commands.add('txtV_xpath_clickF', (xpath, texto, tiempo) => { 
    cy.xpath(xpath).should ('be.visible').type(texto).click({force:true})
    cy.wait(tiempo)
 })

 Cypress.Commands.add('txtV_clickF', (Selector, texto, tiempo) => { 
   cy.get(Selector).should ('be.visible').type(texto).click({force:true})
   cy.wait(tiempo)
})

Cypress.Commands.add('clickF', (Selector) => { 
   cy.get(Selector).should ('be.visible').click({force:true})
})

 Cypress.Commands.add('pagina', (URL, titulo, tiempo) => { 
   //errores
   Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      });
  
  /// <reference types="Cypress"/> 
    cy.visit(URL)
    cy.title("eq", titulo)
    cy.wait(tiempo)
 })

 Cypress.Commands.add('validar_campo_xpath', (selector, men, nombre_campo) => { 
    cy.xpath(selector).should("be.visible").should("contain", men).then((val)=>{
        cy.log("############################################")
        cy.log("############################################")
        cy.log("############################################")
        cy.log("El "+nombre_campo+ " no es valido")
        cy.log("############################################")
        cy.log("############################################")
        cy.log("############################################")
    })
 })

 Cypress.Commands.add('validar_campoN', (selector, men, nombre_campo) => { 
    cy.get(selector).should("be.visible").should("contain", men).then((val)=>{
        cy.log("############################################")
        cy.log("############################################")
        cy.log("############################################")
        cy.log("El "+nombre_campo+ " no es valido")
        cy.log("############################################")
        cy.log("############################################")
        cy.log("############################################")
    })
 })