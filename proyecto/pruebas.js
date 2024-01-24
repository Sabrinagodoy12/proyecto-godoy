
const titulo = document.getElementsByTagName ('h1');
const contenedor = document.getElementById ('cursos');

console.log(titulo);

for (let i=0; i<3; i++){
    contenedor.innerHTML += '<div class="card"><h1 id="titulo">Bienvenido/a</h1></div>';
}

