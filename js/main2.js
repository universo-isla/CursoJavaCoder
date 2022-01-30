
let compra = [];
let totalCompra = 0;
let seleccion = 0;

function Planta(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

function seguirCompra (){
    let cont = prompt("¿Deseas seguir comprando? \n s = si, n = no");
        if (cont == "s"){
            LaSeleccion ();
        }else{
            for (let i=0; i < compra.length; i++){
                totalCompra += compra[i];
            }
            console.log("El total de tu compra es: $" + totalCompra);
        }
}

console.log("Bienvenida a nuestro carrito de compras, selecciona de la lista los productos que quieres comprar:");
LaSeleccion ();

function LaSeleccion (){
    let seleccion = parseInt(prompt("1. Helecho, precio: $150 \n 2. Teléfono, $120 \n 3. Sanseveira, $180 \n 4. Uña de señorita, $80 \n 5. Begonia cruz de hierro, $175 \n 6. Peperomia, $90 \n 7. Monstera, $400"));
    switch(seleccion){
        case 1:
                const planta1 = new Planta("Helecho", 150);
                console.log("Seleccionaste un Helecho");
                compra.push(150);
                seguirCompra ();
            break;
    
        case 2:
            const planta2 = new Planta("Teléfono", 120);
            console.log("Seleccionaste un Teléfono");
            compra.push(120);
            seguirCompra ();
                break;
        
        case 3:
            const planta3 = new Planta("Sanseveira", 180);
            console.log("Seleccionaste una Sanseveira");
            compra.push(180);
            seguirCompra ();
                break;
    
        case 4:
            const planta4 = new Planta("Uña de Señorita", 80);
            console.log("Seleccionaste una Una de Señorita"); //  value;
            compra.push(80);
            seguirCompra ();
                break;
        case 5:
            const planta5 = new Planta("Begonia Cruz de Hierro", 175);
            console.log("Seleccionaste una Begonia Cruz de Hierro"); //  value;
            compra.push(175);
            seguirCompra ();
                break;
    
        case 6:
            const planta6 = new Planta("Peperomia", 90);
            console.log("Seleccionaste una Peperomia"); //  value;
            compra.push(90);
            seguirCompra ();
                break;
        case 7:
            const planta7 = new Planta("Monstera", 400);
            console.log("Seleccionaste una Monstera"); //  value;
            compra.push(400);
            seguirCompra ();
                break;
        default:
            console.log("opción inválida");
            break; //salida del caso
    }

}


