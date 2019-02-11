/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo= document.getElementById("sueldo").Value;
    
    var sueldoConAumento
    
    var aumento= sueldo*0.1;

    sueldoConAumento=parseInt(sueldo)+parseInt(aumento);

    document.getElementById("resultado").value=sueldoConAumento;
	
}
