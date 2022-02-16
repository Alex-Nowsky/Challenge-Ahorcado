
function intentosFallidos(letrasIncorrectas, intentos) {
    switch(intentos) {
        case 1: dibujarCabeza();
                dibujarLetraIncorrecta(letrasIncorrectas);
        break;
        case 2: dibujarTorzo();
                dibujarLetraIncorrecta(letrasIncorrectas);
        break;
        case 3: dibujarBrazoIzq();
                dibujarLetraIncorrecta(letrasIncorrectas);
        break;
        case 4: dibujarBrazoDer();
                dibujarLetraIncorrecta(letrasIncorrectas);
        break;
        case 5: dibujarPiernaIzq();
                dibujarLetraIncorrecta(letrasIncorrectas);
        break;
        case 6: dibujarPiernaDer();
                dibujarLetraIncorrecta(letrasIncorrectas);
                gameOver()
        break;
        default:
        break;
    } 
}
function gameOver() {
    document.getElementById("finDelJuego").style.visibility="visible";
    document.getElementById("finDelJuego").innerHTML = "GAME OVER la palabra correcta era: " + palabraSecreta; 
}