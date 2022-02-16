

function dibujarLetraCorrecta(letrasCorrectas) {  
    var x = 655; 
    for(var i = 0; i < letrasCorrectas.length; i++){
        dibujarLetra(letrasCorrectas[i],x,647);
        x = x + 35;
    }
}
function dibujarLetraIncorrecta(letrasIncorrectas) {   // array
    var x = 655; 
    for(var i = 0; i < letrasIncorrectas.length; i++) { 
        dibujarLetra(letrasIncorrectas,x + 35,300);

    }
}

function dibujarLetra(letra,x,y) {
    
    pincel.beginPath();
    pincel.font="bold 30px arial";
    pincel.strokeStyle = "white";
    pincel.fillText(letra, x, y);
}