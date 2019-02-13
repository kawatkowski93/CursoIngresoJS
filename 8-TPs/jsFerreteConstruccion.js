/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


function Rectangulo () 
{   
    var largo =parseInt(document.getElementById("Largo").value);
    var ancho=parseInt(document.getElementById("Ancho").value);

  var resultado = ((largo*2)+(ancho*2))*3;
  alert(resultado);


}
function Circulo () 
{ 
    var radio=parseInt(document.getElementById("Radio").value);
	var mostrar=Math.floor(radio*Math.PI*2);
    alert(mostrar);
}
function Materiales () 
{
    var base =parseInt( document.getElementById("Largo").value);
    var altura =parseInt(document.getElementById("Ancho").value);

    var area = base*altura 
     alert(area*2+"unidades de cemento");
     alert(area*3+"unidades de  cal"); 
}