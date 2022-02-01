let compras = [];

const Plantas = [
    {id: 1, nombre: "Helecho azul", precio: 150},
    {id: 2, nombre: "Helecho Osaka", precio: 170},
    {id: 3, nombre: "Helecho Faurei", precio: 150},
    {id: 4, nombre: "Uña de señorira", precio: 120},
    {id: 5, nombre: "Begonia Cruz de Hierro", precio: 120},
    {id: 6, nombre: "Peperomia", precio: 120},
    {id: 7, nombre: "Sanseveira", precio: 120}
];

//Función:

console.log("Bienvenida a nuestro carrito de compras, selecciona de la lista los productos que quieres comprar:");
agregarACarrito();

function agregarACarrito() {
    let selctPlanta = parseInt(prompt((JSON.stringify(Plantas)) + '\n Ingrese el ID de su producto:' ));
    let AgregarPlanta = Plantas.find((el) => el.id == selctPlanta);

    compras.push(AgregarPlanta);
        console.log(compras);
        seguirCompra();
}

function seguirCompra (){
    let cont = prompt("¿Deseas seguir comprando? \n s = si, n = no");
        if (cont == "s"){
            agregarACarrito ();
        }else{
            actualizarCarrito();
        }
}

function actualizarCarrito() {
    console.log('cantidad de productos agregados ' + compras.length);
    let suma = compras.reduce((acc, el) => acc + el.precio, 0);
    console.log('El subtotal de su Carrito es $' + suma);
    AgregarEnvio ();
}

function AgregarEnvio (){
    let cont = prompt("¿Elija el tipo de envío? \n CDMX y área metropolitana = L, Foráneo = F");
        if (cont == "L"){
            sumaEnvioLocal ();
            //console.log('la suma total de su Carrito es $' + sumaEnvioLocal);
        }else{
            sumaEnvioLocal();
        }
}

function sumaEnvioForaneo() {
    let costoEnvioForaneo = suma + 200;
    console.log('La suma total de su Carrito es $' + costoEnvioForaneo);
    //this.suma = this.suma + 200;
  }

  function sumaEnvioLocal() {
    let costoEnvioLocal = suma + 80;
    console.log('La suma total de su Carrito es $' + costoEnvioLocal);
    //this.suma = this.suma + 80;
}

function cargarCompra(Plantas) {
    compra.push(Planta);
  }