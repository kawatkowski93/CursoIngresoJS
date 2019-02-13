function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){

        case"Enero":
        alert("tiene 29 dias ");
        break;

        default: // para indicar que todos los demas meses no tienen 29 dias 
        alert("no tiene 29 dias ");

    }


}//FIN DE LA FUNCIÓN