function mostrar()
{
    var precio=prompt("precio");
    var descuento= prompt("descueto");
    var final =((precio*descuento)/100);

    document.getElementById("elPrecioFinal").value=(precio-final); 

}
