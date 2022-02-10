/* let 
let suma= 0;
let costoEnvioForaneo = 0;
let costoEnvioLocal = 0; */


const contenedorPlantas = document.querySelector('.contenedorPlantas');

const plantas = [
    {id: 1, nombre: "Helecho azul", precio: 150, img: '../multimd/helecho_azul.png'},
    {id: 2, nombre: "Helecho Osaka", precio: 170, img: '../multimd/helecho_osaka_ok.png'},
    {id: 3, nombre: "Helecho Faurei", precio: 150, img: '../multimd/helecho_fua.png'},
    {id: 4, nombre: "Uña de señorita", precio: 120, img: '../multimd/una_srita.png'},
    {id: 5, nombre: "Begonia Cruz de Hierro", precio: 120, img: '../multimd/begonia_cdh.png'},
    {id: 6, nombre: "Peperomia", precio: 120, img: '../multimd/peperomia.png'},
    // {id: 7, nombre: "Sanseveira", precio: 120}
]
compras = [];
mostrarPlantas();
total =0;






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
            agregarACarrito(planta.id);
        };

        divPlanta.appendChild(imagenPlanta);
        divPlanta.appendChild(nombrePlanta);
        divPlanta.appendChild(precioPlanta);
        divPlanta.appendChild(btnComprar);
        contenedorPlantas.appendChild(divPlanta);

    })
}


console.log("Bienvenida a nuestro carrito de compras, da click en el producto que quieres agregar");


function agregarACarrito(id){
    const plantaAgregada = plantas.find( planta => planta.id === id );

    console.log("Agregaste " + plantaAgregada.nombre + " a tu carrito, su costo es de $" + plantaAgregada.precio);
    
}