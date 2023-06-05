//ComicSun - E-commerce
//Tienda online de comics, de: Kimetsu No Yaiba y Chainsaw Man.
//Precio de c/u: $1800.


//Primera Pre-Entrega
//Condicionales:

let nombreUsuario = prompt ("Ingrese su nombre:");
let apellidoUsuario = prompt ("Ingrese su apellido:");
let edadUsuario = prompt ("Ingrese su edad:");

console.log ("Nombre: " + nombreUsuario)
console.log ("Apellido: " + apellidoUsuario)
console.log ("Edad: " + edadUsuario) 


/* --- */
if (edadUsuario < 18) {
    alert ("Lo siento " + nombreUsuario + " sos menor de edad.")
    console.log (nombreUsuario + " " + apellidoUsuario + ": tienes que ser mayor de edad para realizar alguna compra.")
}

else {
    alert ("¡Bienvenido: " + nombreUsuario + " " + apellidoUsuario + "!")
    console.log ("¡Bienvenido: " + nombreUsuario + " " + apellidoUsuario + " puede realizar su compra!")


    //Iteraciones:
    /* 
    let productName;
    
    while (true) {
        let producto = parseInt(prompt ("Eliga un Manga: 1- Kimetsu No Yaiba 2- Chainsaw Man"))
        switch (producto){
            case 1:
                productName = "Kimetsu No Yaiba"
                alert ("Elegiste ¡Kimetsu No Yaiba!")
                console.log ("Elegiste ¡Kimetsu No Yaiba!")
                break
            case 2:
                productName = "Chainsaw Man"
                alert ("Elegiste ¡Chainsaw Man!")
                console.log ("Elegiste ¡Chainsaw Man!")
                break
            default:
                alert ("La opcion ingresada no es correcta, intente nuevamente.")
                continue
        }
        break;
    } 
    */

    
    //Funciones:
    /* 
    let stockManga = 5
    let precioManga = 1800
    let cantidadElegir = parseInt (prompt ("Ingrese la cantidad de Comics"))
    let total = 0;
    
    while (cantidadElegir > stockManga) {
        alert ("Cantidad de stock de: " + productName + " es de 5 unidades.")
        cantidadElegir = parseInt(prompt ("Ingrese la cantidad de Comics"));
    }
    
    console.log ("Cantidad elegida: " + cantidadElegir)
    
    function getTotal (precio, cantidad) {
        total = precio * cantidad;
        return total;
    }
    
    function getDiscount(total, discount) {
        return total - ((total * discount )/ 100);
    }
    
    function getStock(cantidad) {
        stockManga = stockManga - cantidad;
    }
    
    console.log(getTotal(cantidadElegir, precioManga) + " Precio total")
    console.log(getDiscount(total, 10) + " Precio con el 10% de descuento")
    
    console.log("Gracias por su compra!") 
    */
    

   //Segunda Pre-Entrega
   
   let productos = [
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 1,
           precio: 1800,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 2,
           precio: 2000,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 3,
           precio: 1800,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 4,
           precio: 2000,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 5,
           precio: 1800,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 6,
           precio: 2000,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 7,
           precio: 1800,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 8,
           precio: 2000,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 9,
           precio: 1800,
           stock: 5
       },
       {
           nombre: "Kimetsu No Yaiba - Demon Slayer",
           tomo: 10,
           precio: 2000,
           stock: 5
       }
   ]
   
   console.log ("***** Tienda *****")
   
   for (const producto of productos) {
       let contenedor = document.createElement("div");
       contenedor.innerHTML = `<h5> Nombre: ${producto.nombre}</h5>
                               <p>  Tomo: ${producto.tomo}</p>
                               <p> $ ${producto.precio}</p>
                               <p> Stock: ${producto.stock}</p>`;
   
       console.log (contenedor.textContent);
   }

                               
   /* --- */
   console.log ("**** Lista de precios: ****")
   productos.forEach ((elementos)=>console.log(elementos.precio))

   
   /* --- */
   console.log ("*** Lista de los precios más económicos: ***")
   let precioMenor = productos.filter ((elementos)=>elementos.precio<2000)
   
   console.log (precioMenor)
   
   
   /* --- */
   let sumaTotal = precioMenor.reduce((acumulador, elementos)=>acumulador+elementos.precio,0)
   console.log (`** La suma total de los productos económicos es de $${sumaTotal} **`)

   console.log("Gracias por su compra!")
} 




