//trae contenedor html//
let contenedor = document.getElementById("contenedorFlex");
//trae totalText html//
let totalText = document.getElementById("totalText");
//inicia total en 0//
let total = 0;

//objeto de productos//
const productos = [
    { nombre: "Lavandina Lavande 5L", precio: 5000, stock: 200 , imagen: "../trabajoFinal/imagen/lavandina.jpg"},
    { nombre: "Desodorante de piso Lavande 5L", precio: 5500, stock: 150 , imagen: "../trabajoFinal/imagen/desodorante.jpg"},
    { nombre: "Detergente Lavande 5L", precio: 6000, stock: 170 , imagen: "../trabajoFinal/imagen/detergente.jpg"},
    { nombre: "Alcohol en Gel Lavande 5L", precio: 8000, stock: 90 , imagen:"../trabajoFinal/imagen/alcohol.jpg"},
    { nombre: "Desengrasante Lavande 5L", precio: 9000, stock: 120 , imagen: "../trabajoFinal/imagen/desengrasante.jpg"},
];

//funcion tarjeta producto contenedor//
function pintarProductos(arrayProductos) {
   
   
    for (let i = 0; i < arrayProductos.length; i++) {
    
        contenedor.innerHTML +=

        //contenedor principal tarjeta//
            `   <div class="forma">
            <!--imagen del producto-->
                <img src=${arrayProductos[i].imagen}>
            <!--div nombre y precio-->
            <div class="nombreYPrecio">    
            <!--nombre-->
            <h4 id="nombreProducto">${arrayProductos[i].nombre}</h4> 
            <!--precio del producto-->
                <h4 id="PrecioUnidad">$${arrayProductos[i].precio} </h4>
                </div>
            <!--stock disponible-->
                <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly >
            <!--Entrada (cantidad de producto)-->
                <input type="number" id="cantidad${i}" placeholder="Ingrese cantidad" >
            <!-- boton agregar carrito-->
                <button id="btn${i}" >Agregar al carrito</button>

            </div>
`
    }
    //crear evento boton, llama a la funcion comprar//
    for(let i = 0; i< arrayProductos.length; i++){
        document.getElementById(`btn${i}`).addEventListener("click", ()=> {
            comprar(i, productos)
        } )
    }
}

//declara funcion, crea variables y las condiciona para relacionar entradas y botones, terminando en TOTAL de COMPRA//
function comprar(index) {
    let stockElement = document.getElementById(`stock${index}`);
    let entradaElement = document.getElementById(`cantidad${index}`); 
    let stock = parseInt(stockElement.value);
    let cantidad = parseInt(entradaElement.value);
    let precio = productos[index].precio;

    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        totalText.innerHTML = ` $${total}`;
        stockElement.value = stock - cantidad;
        //alerta emergente//
        alert(`Compra realizada exitosamente. Total: $${total}`);
    } else {
        alert('Cantidad no valida. Debe ser mayor que 0 y menor o igual al stock.');
    }
    
   
}

//llama a la funcion, la ejecuta//
pintarProductos(productos);
document.getElementById(`btnFinalizar`).addEventListener("click", ()=> {
    if ( total > 0  ) {
    alert(`Gracias por seguir confiando en nosotros, en breve recibira un detalle de su compra`);
} 
else {
    alert ('Seleccione los productos para sumar a su carrito')}
})


console.log (totalText)
console.log (totalText)