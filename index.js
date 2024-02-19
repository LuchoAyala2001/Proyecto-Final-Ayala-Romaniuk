

const boton = document.querySelector('.boton');
const botonIcono = document.querySelector('.boton i');
const barraNavegacion = document.querySelector('.barra_navegacion');

boton.onclick = function() {
    barraNavegacion.classList.toggle('open')
}