function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño){
        case "Enero":                   //si yo  no  cierro  con un breack la funcion case se sigue ejecutando 
        case "Febrero":
        case "Marzo":
        case "Abril":
           alert("todavia no es invierno ");
           break;

        case "Julio":
        case"Agosto":
        alert("abrigate" );
        break;

        


    } 



}//FIN DE LA FUNCIÓN