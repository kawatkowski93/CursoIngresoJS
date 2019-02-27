//cada habitación de un hotel tiene un precio, hay promociones según el tipo de pago,
//si es con tarjeta visa un 10% , si es por paypal un 15%, por mercadoPago un 10%, efectivo
//20 %, cualquier otro medio solo un 5%.
//Si compraste el paquete “todoIncluido” y pagas con paypal se te suma un 10% al
//descuento.
//si pagas en efectivo, tenes varias opciones, el paquete “soloDesayunos” te suma un 10%
//al descuento, si el paquete es “todoIncluido” te suma un 15% y para el resto de los
//paquete no tiene descuento adicional
//3- en tres.js
//En un restaurante, un grupo de amigos quiere saber cuánto debe pagar cada uno//



function mostrar()

{
    var precio
    var descuento
    var precioFinal
    var medio
    precio=prompt("ingrese el precio de la habitacion?");
    medio=prompt("ingrese el medio de pago ");
    switch(medio){
        case "tarjetaVisa":
        descuento=precio*0.1;
        precioFinal=precio-descuento;


        alert(precioFinal);
        break;

        case "paypal":
                    switch(paquete){
                          case "todoIncluido":

                          break;
                          default :

                    }switch (tipo){

                        case "Efectivo":
                            switch(paquete)



                    }





    }










}
