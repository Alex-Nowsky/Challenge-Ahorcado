var botonDeInicio = document.getElementById("iniciar-juego")
botonDeInicio.onclick = elegirPalabraSecreta;

var palabrasSecretas = ["CASA", "TERMO", "RACING", "ALURA","DAMIAN", "CONSTANTINOPLA"];

function elegirPalabraSecreta() {
    var palabraAveriguar = palabrasSecretas[aleatorio(min, max, palabrasSecretas.length)];
    
    console.log(palabraAveriguar);
}
var min = 0;
var max = palabrasSecretas.length - 1;

function aleatorio(min, max, nroDePalabras) {
    var nroAleatorio = Math.round(Math.random() * (max - min) + min);
    if (nroAleatorio <= nroDePalabras) {
        return nroAleatorio;
    }
}



