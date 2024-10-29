class ProyectoUno_PO{

    VisitarPagina(URL, Titulo, tiempo){
        before(()=>{
            cy.pagina(URL, Titulo, tiempo)
        })
    }
}

export default ProyectoUno_PO;