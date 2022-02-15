


function comenzarJuego() {
    elegirPalabraSecreta();
    dibujarMastil()
    dibujarLineaLetra();
    var input = document.querySelector("#teclas-presionadas");
    input.focus();
    input.value = "";
}

