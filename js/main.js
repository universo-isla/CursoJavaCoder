/* let 
let suma= 0;
let costoEnvioForaneo = 0;
let costoEnvioLocal = 0; */

compras = [];

const plantas = [
    {id: 1, nombre: "Helecho azul", precio: 150, img: '../multimd/helecho_azul.png'},
    {id: 2, nombre: "Helecho Osaka", precio: 170, img: '../multimd/helecho_osaka_ok.png'},
    {id: 3, nombre: "Helecho Faurei", precio: 150, img: '../multimd/helecho_fua.png'},
    {id: 4, nombre: "Uña de señorita", precio: 120, img: '../multimd/una_srita.png'},
    {id: 5, nombre: "Begonia Cruz de Hierro", precio: 120, img: '../multimd/begonia_cdh.png'},
    {id: 6, nombre: "Peperomia", precio: 120, img: '../multimd/peperomia.png'},
    // {id: 7, nombre: "Sanseveira", precio: 120}
]

const contenedorPlantas = document.querySelector('.contenedorPlantas');

const arrayCarrito = [];

mostrarPlantas();
agregarACarrito();

function mostrarPlantas() {
    plantas.forEach( function (planta) {
        //console.log(planta.nombre);

        const divPlanta = document.createElement('div');
        divPlanta.classList.add('.cardPlanta');
        console.log(divPlanta);

        const imagenPlanta = document.createElement('img');
        imagenPlanta.classList.add('.imagenPlanta');
        imagenPlanta.src = planta.img;

        console.log(imagenPlanta);

        const nombrePlanta = document.createElement("h3");
        nombrePlanta.textContent = planta.nombre;

        const precioPlanta = document.createElement("h2");
        precioPlanta.textContent = "$" + planta.precio;

        const btnComprar = document.createElement("button");
        btnComprar.classList.add("btn-comprar");
        btnComprar.textContent = "Agregar al carrito";

        btnComprar.onclick = () => {
            agregarACarrito(planta.precio);
        };

        divPlanta.appendChild(imagenPlanta);
        divPlanta.appendChild(nombrePlanta);
        divPlanta.appendChild(precioPlanta);
        divPlanta.appendChild(btnComprar);
        
        contenedorPlantas.appendChild(divPlanta);

    })
}


function agregarACarrito(precio){
    //const plantasAComprar = plantas.find( planta => planta.precio == precio );
    
    compras.push;
    console.log("Se ha agregado " + precio + " a tu carrito");
}


//Función:
/* 
console.log("Bienvenida a nuestro carrito de compras, selecciona de la lista los productos que quieres comprar:");
agregarACarrito();

function agregarACarrito() {
    let selctPlanta = parseInt(prompt((JSON.stringify(plantas)) + '\n Ingrese el ID de su producto:' ));
    let AgregarPlanta = plantas.find((el) => el.id == selctPlanta);

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
    suma = compras.reduce((acc, el) => acc + el.precio, 0);
    console.log('El subtotal de su Carrito es $' + suma);
    AgregarEnvio ();
}

function AgregarEnvio (){
    let cont = prompt("¿Elija el tipo de envío? \n CDMX y área metropolitana = L, Foráneo = F");
        if (cont == "L"){
            sumaEnvioLocal ();
        }else{
            sumaEnvioForaneo();
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
  } */