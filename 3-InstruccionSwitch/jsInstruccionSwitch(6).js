function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
       
        switch(laHora){

            case"7":
            case"8":
            case"9":
            case"10":
            case"11":

            alert("es de mañana");
            break;

        case"12":
    
        case"13":
        case"14":
        alert("es medio dia");
        break;

        default:
            
        alert(" es de dia ");

        






        }


}//FIN DE LA FUNCIÓN