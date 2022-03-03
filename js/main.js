/* let 
let suma= 0;
let costoEnvioForaneo = 0;
let costoEnvioLocal = 0; */


let totalCompra = 0;

const contenedorPlantas = document.querySelector('.contenedorPlantas');
const carrito = document.querySelector('.carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


arrayCarrito = [];
mostrarPlantas([]);

total = 0;

const URL = "../js/plantas.json";
fetch(URL)
.then(resp => resp.json())
.then(mostrarPlantas)


function mostrarPlantas(plantas) {
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
            agregarACarrito(planta);
        };


    })
}

function agregarACarrito(planta){
    let productoRepetido = arrayCarrito.find(buscar => buscar.id == planta.id)
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

            let plantaAgregada = planta;
            console.log(plantaAgregada);
            arrayCarrito.push(plantaAgregada);
            Swal.fire(`Haz agregado ${plantaAgregada.nombre} al carrito`)

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

    precioTotal.innerText = arrayCarrito.reduce((acc,el)=> acc + (el.precio), 0)

    //Storage del carrito:
    const guardarCarrito = (clave, valor) =>{localStorage.setItem(clave,valor)}
    guardarCarrito("listaproductos", JSON.stringify(arrayCarrito));
    let almacenada = JSON.parse(localStorage.getItem("listaproductos"));

}