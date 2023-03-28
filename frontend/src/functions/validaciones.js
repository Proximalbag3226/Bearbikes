const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const apellido_paterno = document.getElementById("apellido_paterno");
const apellido_materno = document.getElementById("apellido_materno");
const parrafo = document.getElementById("alertas");
const form = document.getElementById("inputss");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let regrexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log(regrexEmail.test(email.value))
    if(regrexEmail.test(email.value)){

    }
})