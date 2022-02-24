/* let 
let suma= 0;
let costoEnvioForaneo = 0;
let costoEnvioLocal = 0; */


let totalCompra = 0;

const contenedorPlantas = document.querySelector('.contenedorPlantas');
const carrito = document.querySelector('.carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

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
    let productoRepetido = arrayCarrito.find(buscar => buscar.id == id)
        if(productoRepetido) {
            productoRepetido.cantidad = productoRepetido.cantidad + 1
            productoRepetido.precio = productoRepetido.precio * productoRepetido.cantidad
            
            document.getElementById(`cantidad${productoRepetido.id}`).innerHTML = `<td id="cantidad${productoRepetido.id}">cant.: ${productoRepetido.cantidad}</td> `
            document.getElementById(`precio${productoRepetido.id}`).innerHTML = `<td id="precio${productoRepetido.id}">$: ${productoRepetido.precio}</td> `
             //para modificar la línea de código con la cantidad
            //se repite la línea de código que se va a amodificar, pero se cambia la variable por la que se está trabajando aquí (productoRepetido)
            /* productoRepetido.precio = productoRepetido.precio * productoRepetido.cantidad
             */

            actualizarCarrito()

        }else{
            

            let plantaAgregada = plantas.find( planta => planta.id == id )
            console.log(plantaAgregada);
            arrayCarrito.push(plantaAgregada);
            Swal.fire(`Haz agregado ${plantaAgregada.nombre} al carrito`)

        // alert("Agregaste " + plantaAgregada.nombre + " a tu carrito");
        actualizarCarrito()
            

            let tr = document.createElement("tr")
            tr.className = "celdaCarrito"
            tr.innerHTML = `
                    <td class="plantaTabla">${plantaAgregada.nombre}</td>
                    <td id="precio${plantaAgregada.id}">$ ${plantaAgregada.precio}</td>
                    <td id="cantidad${plantaAgregada.id}">cant.: ${plantaAgregada.cantidad}</td>
                    <button id="btnQuitar${plantaAgregada.id}"> quitar </button>         
                    `
            carrito.appendChild(tr)

            let btnQuitar = document.getElementById(`btnQuitar${plantaAgregada.id}`)
            

            btnQuitar.addEventListener('click', () => {
                if(plantaAgregada.cantidad == 1){
                    btnQuitar.parentElement.remove()
                    //console.log(btnQuitar.parentElement); //parentElement visualiza el elemento padre... si es que funciona
                    arrayCarrito = arrayCarrito.filter(item => item.id != plantaAgregada.id);
                    actualizarCarrito()

                }else{
                    plantaAgregada.cantidad = plantaAgregada.cantidad - 1
                    plantaAgregada.precio = plantaAgregada.precio * plantaAgregada.cantidad
            
                    document.getElementById(`cantidad${plantaAgregada.id}`).innerHTML = `<td id="cantidad${plantaAgregada.id}">cant.: ${plantaAgregada.cantidad}</td> ` 
                    document.getElementById(`precio${plantaAgregada.id}`).innerHTML = `<td id="precio${plantaAgregada.id}">$: ${plantaAgregada.precio}</td> `
                    actualizarCarrito()

                }

                    
            }) 

    }
}

function actualizarCarrito (){
    //contadorCarrito.innerText = arrayCarrito.reduce((acc,el) => acc + el.cantidad, 0) //acumulador (acc) y elemento (el): actualiza, al recibir un elemento, el valor cantidad, 0 es para decir 0+1 y de ahí sigue sumando
    //totalCompra.innerText = arrayCarrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
    console.log(arrayCarrito);

    precioTotal.innerText = arrayCarrito.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)

    //Storage del carrito:
    const guardarCarrito = (clave, valor) =>{localStorage.setItem(clave,valor)}
    guardarCarrito("listaproductos", JSON.stringify(arrayCarrito));
    let almacenada = JSON.parse(localStorage.getItem("listaproductos"));

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
