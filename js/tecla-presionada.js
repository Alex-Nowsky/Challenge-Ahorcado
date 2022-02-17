


var letrasIncorrectas = [];
var letrasCorrectas = [];
var vectorPalabra = palabraSecreta.split(""); // convierte en un array por caracter
function onKeyDownHandler(event) {
    
    var codigo = event.keyCode;
    var caracterIngresado = String.fromCharCode(codigo).toUpperCase(); // uppercase pone en mayus
    var encontrado = true;
    var x = 655;
    for(var i = 0; i < palabraSecreta.length; i++) {
        
        if(vectorPalabra[i] == caracterIngresado) {
            letrasCorrectas[i] = caracterIngresado; 
            encontrado = false;
            dibujarLetra(caracterIngresado,x,647);
            
        }
        x = x + 35;
    }
    var intentos = 0;
    if (encontrado == true) {
        intentos = intentos + 1;
        letrasIncorrectas.push(caracterIngresado);
        var incorrectas = new  Set(letrasIncorrectas); // Set(...) para sacar duplicados
        let letrasIncorrectasSinDuplicado = [...incorrectas];
        for(var j = 0; (j < letrasIncorrectasSinDuplicado.length) && letrasIncorrectasSinDuplicado.length < 7 ; j++) {
            intentosFallidos(letrasIncorrectasSinDuplicado, intentos); 
            intentos = intentos + 1;
        }
    }
    comprobarGanador()
    
} 

function comprobarGanador() {
    if(palabraSecreta == letrasCorrectas.join("")) {
        document.getElementById("finDelJuegoGanador").style.visibility="visible";
        document.getElementById("finDelJuegoGanador").innerHTML = "WINNER!";
    }
}


