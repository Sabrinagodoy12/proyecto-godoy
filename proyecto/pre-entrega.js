//Solicitar nombre al usuario para darle la bienvenida
let usuario = prompt('Ingrese su nombre de usuario');
let mensaje = 'Hola ' + usuario + ' ' + 'bienvenido/a a nuestro sitio web de cerámica';

console.log(mensaje);
alert(mensaje);

//Funciones para mostrar los productos
function Producto( nombre, precio ){

        this.nombre = nombre;
        this.precio = precio;

        this.descuento = function(){
            this.precioConDescuento = this.precio * 0.25;
            alert('El precio con descuento queda en: ' + '$' + this.precioConDescuento)
        }
    }

const producto1 = new Producto ('Platos', 25000);
const producto2 = new Producto ('Tazas', 15000);
const producto3 = new Producto ('Macetas', 30000);
const producto4 = new Producto ('jarrones', 20000);
const producto5 = new Producto ('Mates', 10000);
const producto6 = new Producto ('Esculturas', 40000);

console.log( producto1 );
console.log( producto1.nombre );

