/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fare=parseInt(document.getElementById("Temperatura").value);

       var resultado=fare+32;
       alert(resultado);  
}

function CentigradosFahrenheit () 
{
	var cent=parseInt(document.getElementById("Temperatura").value);
    var resultado=cent-32;
    alert(resultado);
}
