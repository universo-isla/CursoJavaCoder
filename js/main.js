/* let 
let suma= 0;
let costoEnvioForaneo = 0;
let costoEnvioLocal = 0; */

let totalCompra = 0;

const contenedorPlantas = document.querySelector('.contenedorPlantas');
const carrito = document.querySelector('.carrito');
const contadorCarrito = document.getElementById('.contadorCarrito');

const plantas = [
    {id: 1, nombre: "Helecho Azul", precio: 150, img: '../multimd/helecho_azul.png', cantidad:1},
    {id: 2, nombre: "Helecho Osaka", precio: 170, img: '../multimd/helecho_osaka_ok.png', cantidad:1},
    {id: 3, nombre: "Helecho Faurei", precio: 150, img: '../multimd/helecho_fua.png', cantidad:1},
    {id: 4, nombre: "Uña de señorita", precio: 120, img: '../multimd/una_srita.png', cantidad:1},
    {id: 5, nombre: "Begonia Cruz de Hierro", precio: 120, img: '../multimd/begonia_cdh.png', cantidad:1},
    {id: 6, nombre: "Peperomia", precio: 120, img: '../multimd/peperomia.png', cantidad:1},
    // {id: 7, nombre: "Sanseveira", precio: 120}
]

arrayCarrito = [];
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

        divPlanta.appendChild(imagenPlanta);
        divPlanta.appendChild(nombrePlanta);
        divPlanta.appendChild(precioPlanta);
        divPlanta.appendChild(btnComprar);
        contenedorPlantas.appendChild(divPlanta);

        btnComprar.onclick = () => {
            agregarACarrito(planta.id);
        };


    })
}


/* function agregarACarrito(id){
    const plantaAgregada = plantas.find( planta => planta.id == id )
    alert("Agregaste " + plantaAgregada.nombre + " a tu carrito");
    arrayCarrito.push(plantaAgregada);
    console.log(arrayCarrito);

    const divCarrito = document.createElement("div");
        divCarrito.classList.add('.cardCarrito');

    const nombreEnCarrito = document.createElement("h3");
        nombreEnCarrito.textContent = plantaAgregda.nombre;
    
} */

function agregarACarrito(id){
    let plantaAgregada = plantas.find( planta => planta.id == id )
    console.log(plantaAgregada);
    arrayCarrito.push(plantaAgregada);

   // alert("Agregaste " + plantaAgregada.nombre + " a tu carrito");
   actualizarCarrito()
    
    let tr = document.createElement("tr")
    tr.className = "celdaCarrito"
    tr.innerHTML = `
            <td class="plantaTabla">${plantaAgregada.nombre}</td>
            <td>$ ${plantaAgregada.precio}</td>
            <td>cant.: ${plantaAgregada.cantidad}</td>
            <td> <button id="btnQuitar${plantaAgregada.id}"> quitar </button> </td>          
            `
    carrito.appendChild(tr)

    let btnQuitar = document.getElementById(`btnQuitar${plantaAgregada.id}`)
    

    btnQuitar.addEventListener('click', () => {
        //btnQuitar.parentElement.remove()
        console.log(btnQuitar.parentElement); //parentElement visualiza el elemento padre... si es que funciona
    }) 
}

function actualizarCarrito (){
    contadorCarrito.innerText = arrayCarrito.reduce((acc,el) => acc + el.cantidad, 0) //acumulador (acc) y elemento (el): actualiza, al recibir un elemento, el valor cantidad, 0 es para decir 0+1 y de ahí sigue sumando
    totalCompra.innerText = arrayCarrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}


   //console.log(arrayCarrito);   
/*     function construirTabla(comprando) {
        var tbl = document.getElementById("carrito");
            var row = tbl.insertRow();
    } */
    
    //alert(tbl);
    
    /* var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell(); */

/*     cell1.innerHTML = `<p>${plantaAgregar.nombre}</p> `
    cell2.innerHTML = `<p>${plantaAgregar.precio}</p> `
    cell1.innerHTML = `<button class="quitarDelCarrito"></button> ` */

    
/*     let div = document.createElement('div')
    div.className = 'plantaEnCarrito'
    div.innerHTML = `
        <p>${plantaAgregar.nombre}</p>
        <p>${plantaAgregar.precio}</p>
        <button class="quitarDelCarrito"></button> `

    carrito.appendChild(div); */
