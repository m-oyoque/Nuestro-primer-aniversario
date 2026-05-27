const fechaInicio = new Date("2024-05-31T00:00:00:00");

/* CONTADOR */

function actualizarContador(){

    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / (1000 * 60)) % 60);


    const contador = document.getElementById("contador");

    if(contador){

        contador.innerHTML =
        `${dias} días ♡ ${horas} horas ♡ ${minutos} minutos ♡ ${segundos} segundos ♡`;

    }

}

setInterval(actualizarContador,1000);

actualizarContador();

/* CARTAS */

function revealLetter(){

    const letter = document.getElementById("letter");

    if(letter){
        letter.classList.toggle("show");
    }

}

/* MENSAJE SECRETO */

function mensajeSecreto(){

    const secretito = document.getElementById("secretito");

    if(secretito){
        secretito.classList.toggle("show");
    }

}

/* LOADER */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },1000);

        },1000);

    }

});

/* MUSICA */

function toggleMusic(){

    const music = document.getElementById("bgMusic");

    if(!music) return;

    if(music.paused){

        music.play();

    }else{

        music.pause();

    }

}


function moveCarousel(direction){

    const carousel =
    document.getElementById("carouselTrack");

    if(!carousel) return;

    carousel.scrollBy({
        left: direction * 350,
        behavior: "smooth"
    });

}



function entrarPagina(){

    const loader =
    document.getElementById("loader");

    const content =
    document.getElementById("mainContent");

    const music =
    document.getElementById("bgMusic");

    /* MUSICA */

    if(music){

        music.volume = 0.4;

        music.play();

    }

    /* TRANSICIÓN LENTA */

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

        content.style.opacity = "1";

        /* SCROLL SUAVE */

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },2500);

}
