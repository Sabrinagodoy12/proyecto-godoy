//Solicitar nombre al usuario para darle la bienvenida
let usuario = prompt ('Ingrese su nombre de usuario');
let mensaje = 'Hola ' + usuario + ' ' + 'bienvenido/a a nuestro sitio web de cerámica';

console.log (mensaje);
alert (mensaje);

//Mostrar los productos que estan en oferta
function Producto (nombre, precio){

        this.nombre = nombre;
        this.precio = precio;

        this.descuento = function(){
            this.precioConDescuento = this.precio * 0.75;
            alert ('El precio con descuento queda en: ' + '$' + this.precioConDescuento);
        }
    }

const producto1 = new Producto ('Platos', 25000);
const producto2 = new Producto ('Tazas', 15000);
const producto3 = new Producto ('Macetas', 30000);
const producto4 = new Producto ('Mates', 10000);

console.log (producto1, producto2, producto3, producto4);

//Lista de todos los producos
const carrito = [
    {nombre: 'Platos', categoria: 'Cocina', precio: 25000},
    {nombre: 'Tazas', categoria: 'Cocina', precio: 15000},
    {nombre: 'Mates', categoria: 'Cocina', precio: 10000},
    {nombre: 'Bowls', categoria: 'Cocina', precio: 20000},
    {nombre: 'Escultura', categoria: 'Hogar', precio: 35000},
    {nombre: 'Macetas', categoria: 'Jardín', precio: 30000},
    {nombre: 'Soporte de Velas', categoria: 'Hogar', precio: 10000},
    {nombre: 'Ollas', categoria: 'Cocina', precio: 50000},
];

console.table (carrito)
let cantidad = carrito.length;

for (let i=0; i<cantidad; i++){
    console.log ('posición ' + i + ': ' + carrito [i]. nombre);
}

//Buscar una categoría en el carrito
carrito.forEach ((item) => {
    console.log (item.nombre.toUpperCase())
});

let buscar = prompt ('Busca tu categoría de productos');

const encontrados = carrito.find ((item) => item.categoria.toLowerCase() === buscar.toLowerCase());

if (encontrados){
    alert ('Se encontró la siguiente categoría: ' + encontrados.categoria)
}
else {
    alert ('Esa categoría no existe ' + buscar)
} 

//Busqueda por nombres en el carrito
class Objeto {
    constructor (carrito){
        this.carrito = carrito;
    }

    getProductbyName (nombre){
        const name = this.carrito.filter (item => item.nombre.toLowerCase().includes (nombre.toLowerCase()));
        return name;
    } 
}

const libro = new Objeto (carrito);
const elementos = libro.getProductbyName('t');

console.table(elementos);


//Agrega un elemento al carrito
while (confirm ('¿Deseas agregar otro producto al carrito?')){
    producto = prompt ('Indica tu producto');
    carrito.push (producto);
}

for (let i=0; i<carrito.length; i++){
    console.log (carrito [i]);
}

//Quita un elemento del carrito
while (confirm ('¿Deseas quitar un elemento del carrito?')){

    producto = prompt ('Indica el producto que deseas quitar');
    carrito.splice (3,1);
    console.table (carrito);
}


