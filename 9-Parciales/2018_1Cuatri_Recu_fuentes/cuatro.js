function mostrar()
{
        /*var libros ;
        var descuento;
        var precioFinal;
        var precio;
        var tarjeta;


        libro=prompt("cantidad de libros ");
        libros=parseInt(libros);

        precio=prompt("precio");
        precio=parseInt(precio);

        tarjeta=confirm("paga con tarjeta ?");




        if(libros>2){*/

        /*}   comparar 4 numeros  ejercio 1 */
         /*var  num1= prompt("primer numero");
         var  num2 =prompt("segundo numero");
         var  num3=prompt("tercernumero");
          var num4=prompt("tercer numero");
         var mayor = num1

        if (num2>mayor){

        mayor =num2;

        }if (num3>mayor){

        mayor= num3;

        }if (num4>mayor){
         mayor =num4;
        }alert(mayor+ "el mayor es");
              } llave final */

          var contador =0;
           var mayor
           var orden
           var num


            while(contador<4){
              contador++;
              do{
              num=prompt("ingrese los  numeros restantes ");
              num=parseInt(num);

              }while(isNaN(num));// aca valido  si es un  numero  ingresa el dato solo una vez una vez que paso ya esta  valido  i sigue con  las condiciones .

              if(contador==1){ // esta es la  primera interaccion
                orden=contador// va a ser  mi primer mayor  el primer numero
                mayor=num;

              }else{
                if(num>mayor){
                  mayor=num// aca comparo de esa  primera  interaccion si  el numero es mayor

                  orden=contador
                }



          }






  }
