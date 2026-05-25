const fechaInicio = new Date("2024-05-31T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    const contador = document.getElementById("contador");

    if (contador) {
        contador.innerHTML =
        `${dias} días ♡ ${horas} horas ♡ ${minutos} minutos`;
    }
}

setInterval(actualizarContador, 1000);

function revealLetter() {
    const letter = document.getElementById("letter");

    if(letter){
        letter.classList.add("show");
    }
}

function mensajeSecreto() {
    const secretito = document.getElementById("secretito");

    if(secretito){
        secretito.classList.add("show");
    }
}

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);

        }, 1500);

    }

});

actualizarContador();
