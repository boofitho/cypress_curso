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