const fechaInicio = new Date(2025, 4, 31, 13, 35, 0);

/* CONTADOR */

function actualizarContador(){

    const ahora = new Date();

    const diferencia = ahora.getTime() - fechaInicio.getTime();

    const dias =
    Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas =
    Math.floor((diferencia / (1000 * 60 * 60)) % 24);

    const minutos =
    Math.floor((diferencia / (1000 * 60)) % 60);

    const segundos =
    Math.floor((diferencia / 1000) % 60);

    const contador =
    document.getElementById("contador");

    if(contador){

        contador.innerHTML =
        `${dias} días ♡ ${horas} horas ♡ ${minutos} minutos ♡ ${segundos} segundos ♡`;

    }

}

setInterval(actualizarContador,1000);

actualizarContador();

/* CARTAS */

function revealLetter(){

    const letter =
    document.getElementById("letter");

    if(letter){

        letter.classList.toggle("show");

    }

}

/* MENSAJE SECRETO */

function mensajeSecreto(){

    const secretito =
    document.getElementById("secretito");

    if(secretito){

        secretito.classList.toggle("show");

    }

}

/* LOADER AUTOMÁTICO */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    const content =
    document.getElementById("mainContent");

    const music =
    document.getElementById("bgMusic");

    /* MÚSICA */

    if(music){

        music.volume = 0.4;

        music.play().catch(() => {

            console.log("Autoplay bloqueado");

        });

    }

    /* TRANSICIÓN */

    setTimeout(() => {

        loader.style.opacity = "0";

        content.style.opacity = "1";

        setTimeout(() => {

            loader.style.display = "none";

        },4000);

    },3500);

});
