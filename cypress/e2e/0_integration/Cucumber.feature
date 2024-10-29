# Feature: Demo de cucumber

#   Esto es una demo de como utilizar cucumber

#   Scenario:Demo de cucumber 
#     Given ingresar y validar titulo de pagina 
#     When Cargando el nombre leonel
#     When Cargando el apellido ronaldo
#     When Cargando el telefono 3334444221
#     When Cargando el email siiiuuuu@messi.com
#     When Cargando la direccion 'barcelona mi casita'
#     And click en validar
#     Then click en limpiar
    

    Feature: Demo de cucumber outline

  Esto es una demo de como utilizar cucumber outline

  Scenario Outline:Demo de cucumber outline 
    Given ingresar y validar titulo de pagina 
    When Cargando el nombre <nombre>
    When Cargando el apellido <apellido>
    When Cargando el telefono <telefono>
    When Cargando el email <email>
    When Cargando la direccion <direccion>
    And click en validar
    Then click en limpiar
    
    Examples:
        |nombre|apellido|telefono|email|direccion|
        |miguel|alonzo|1234567890|miguel@gmail.com|'barcelona mi casita'|
        |leonel|messi|9874561235|meeeesi@gmail.com|'miami mi casita'|
        |cristiano|ronaldo|4567891236|cristiano@gmail.com|'arabia mi casita'|
        |neymar|jr|364565489|n@gmail.com|'al hilal mi casita'|