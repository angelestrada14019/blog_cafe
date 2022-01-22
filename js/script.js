// window.addEventListener('load', () => { //espera a que se cargue la pagina, html, css,imagenes, js, etc
//     // seleccionar contenido
//     //query selector
//     // query selector all
//     //get by id
//     //agregsr html
//     //crear fragment let fragment = document.createDocumentFragment();
//     //creo un elemento contenedor del html let cards = document.createElement("section");
//     // ah ese elemento contenedor de agrego html contenido dentro cards.innerHTML = `<a href="./infoPeliculas.html">
//     //     <div class='item'>
//     //         <img src=${peli.imgUrl}>
//     //         <h3>${peli.nombre}</h3>
//     //     </div>
//     // </a>`;
//     //agrego el elemento contenedor al fragment fragment.appendChild(cards);
//     //agrego el fragment al contenedor principal contenedorPeli.appendChild(fragment);
// });
//document.addEventListener('DOMContentLoaded', () => { //SOLO ESPERA QUE CARGUE EL HTML
  
//});
// window.onscroll = () => {
    //     //espera que se haga scroll
    //     console.log("scroll ...");
    // }; 

//............globales...................................
const datos = {
    nombre: "",
    email: "",
    mensaje: "",
};
  const nombre = document.querySelector("#nombre");
  const email = document.querySelector("#email");
  const mensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector(".formulario");
//...................................................

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //validar formulario
    const { nombre, email, mensaje } = datos;
    if (nombre === "" || email === "" || mensaje === "") {
        //alert("Todos los campos son obligatorios");
        mostrarAlerta("Todos los campos son obligatorios",true);
        return;
    } 
    //enviar datos
    formulario.reset();    
    mostrarAlerta("Se ha enviado el mensaje");
    //enviar formulario
});
// nombre.addEventListener('input', () => {
//     console.log(nombre.value);
// });
// email.addEventListener('input', () => {
//     console.log(email.value);
// });
// mensaje.addEventListener('input', () => {
//     console.log(mensaje.value);
// });

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener('input',leerTexto);
function leerTexto(e) {    
    datos[e.target.id] = e.target.value; //como el id concuerda con el nombre del atributo del objeto, se puede acceder directamente    
}
function mostrarAlerta(mensaje,error=null) {
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("mensajeCorrecto");
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


