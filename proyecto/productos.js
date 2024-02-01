//Queryselector
const productos = document.querySelector ('#productos');
const titulo = document.querySelector('h1');
const card = document.querySelector ('.card');
const subtitulo = document.querySelector ('.subtitulo');
const texto = document.querySelector ('p');
const contenedor = document.querySelector ('#card-productos');

//todos los productos
const todosProductos = [
    {nombre: 'Platos', categoria: 'Cocina', precio: 25000, img: './media/img-plato7.jpg'},
    {nombre: 'Tazas', categoria: 'Cocina', precio: 15000, img: './media/img-taza3.jpg'},
    {nombre: 'Mates', categoria: 'Cocina', precio: 10000, img: './media/img-mate3.jpg'},
    {nombre: 'Bowls', categoria: 'Cocina', precio: 20000, img: './media/img-bowl3.jpg'},
    {nombre: 'Escultura', categoria: 'Hogar', precio: 35000, img: './media/img-escultura.jpg'},
    {nombre: 'Macetas', categoria: 'Jardín', precio: 30000, img: './media/img-maceta2.jpg'},
    {nombre: 'Soporte de Velas', categoria: 'Hogar', precio: 10000, img: './media/img-vela2.jpg'},
    {nombre: 'Ollas', categoria: 'Cocina', precio: 50000, img: './media/img-olla.jpg'}
];

for (let i=0; i<todosProductos.length; i++){
    let elemento = todosProductos[i];
    console.log(elemento);

    contenedor.innerHTML += //HTML
    `<div class="card">
    <div class="card-image">
    <img src="${elemento.img}" class="imagen-card">
    </div>
    <div class="card-body">
        <h4>${elemento.nombre}</h4>
        <i class='bx bx-cart bx-md'  ></i>
       <p class="texto-card">$${elemento.precio}</p>
        </div>`;
}

//Parte del carrito
render (todosProductos);



