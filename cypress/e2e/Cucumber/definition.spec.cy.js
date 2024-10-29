Given ('ingresar y validar titulo de pagina', ()=>{
    cy.pagina("https://validaciones.rodrigovillanueva.com.mx/index.html", "Formulario de Ejemplo", 1500)
})
When('Cargando el nombre {word}',(nombre)=>{
    cy.txtV("#nombre", nombre, 300) 
})
When('Cargando el apellido {word}',(apellido)=>{
    cy.txtV("#apellidos", apellido,  300) 
})
When('Cargando el telefono {word}',(tel)=>{
    cy.txtV("#tel", tel,  300) 
})
When('Cargando el email {word}',(email)=>{
    cy.txtV("#email", email,  300) 
})
When('Cargando la direccion {string}',(direccion)=>{
    cy.txtV("#direccion", direccion, 300) 
})
And('click en validar',()=>{
    cy.clickF(".btn-primary")
    cy.wait(300)
})
Then('click en limpiar',()=>{
    cy.clickF('.btn-secondary')
})
