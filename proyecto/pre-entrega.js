//Solicitar nombre al usuario para darle la bienvenida
let usuario = prompt('Ingrese su nombre de usuario');
let mensaje = 'Hola ' + usuario + ' ' + 'bienvenido/a a nuestro sitio web de cerámica';

console.log(mensaje);
alert(mensaje);

//Parte de selección de productos
let productos = prompt('Coloque un número del 1 al 10, para seleccionar su producto');
while (productos != 'ESC'){
    switch (productos){
        case '1':
            alert('Se seleccionó platos');
            break;
        case '2':
            alert('Tazas');
            break;
        case '3':
            alert( 'Macetas');
            break;
        case '4':
            alert('Jarrones');
            break;
        case '5':
            alert('Hoyas');
            break;
        case '6':
            alert( 'Esculturas');
            break;

        default:
            alert('Ese producto no existe');
            break
    }
    productos = prompt('Coloque un número del 1 al 10, para seleccionar su producto');
}



