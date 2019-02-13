function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño) {
        case "Marzo":
            alert("tienen 28 dias ");
            break;
    case "Abril":
    alert("tienen 30 dias ");
    break;
        default:
            alert("tienen 31 dias  ");
    }



}//FIN DE LA FUNCIÓN