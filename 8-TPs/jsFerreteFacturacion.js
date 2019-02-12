/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
   var numero1,numero2,numero3;

function Sumar () 

{    numero1=parseInt( document.getElementById("PrecioUno").value);
     numero2=parseInt( document.getElementById("PrecioDos").value);
     numero3=parseInt( document.getElementById("PrecioTres").value);
    alert(numero1+numero2+numero3);
}


function Promedio()
{
    numero1=parseInt( document.getElementById("PrecioUno").value);
     numero2=parseInt( document.getElementById("PrecioDos").value);
     numero3=parseInt( document.getElementById("PrecioTres").value);
        alert((numero1+numero2+numero3)/3);
}
	

function PrecioFinal () 
{
	numero1=parseInt( document.getElementById("PrecioUno").value);
     numero2=parseInt( document.getElementById("PrecioDos").value);
     numero3=parseInt( document.getElementById("PrecioTres").value);

    var suma= numero1+numero2+numero3
    var iva=(suma*21)/100;
    alert(parseInt( suma)+ parseFloat( iva) );
    
}