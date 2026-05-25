const fechaInicio = new Date("2024-05-31T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    const contador = document.getElementById("contador");

    if(contador){
        contador.innerHTML =
        `${dias} días ♡ ${horas} horas ♡ ${minutos} minutos`;
    }
}

setInterval(actualizarContador, 1000);

function revealLetter() {
    document.getElementById("letter").classList.add("show");
}
