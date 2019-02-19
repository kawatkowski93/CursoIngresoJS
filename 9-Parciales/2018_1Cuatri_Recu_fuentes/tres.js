function mostrar()
{   
    var precio=parseInt( prompt("precio"));
    var propina
    var comen= parseInt( prompt("comensales"));



    propina=parseInt(precio)*0.1;


    
     var iva=parseInt(precio)*0.21;

     var precioFinal=(precio+propina+iva)/comen;

     document.getElementById("elPrecioFinal").value=precioFinal;
    




 

  

}
