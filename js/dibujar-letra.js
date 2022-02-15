

function dibujarLetraCorrecta(letra) {  
    var x = 655; 
    dibujarLetra(letra,x,647);
}
function dibujarLetraIncorrecta(letra) {  
    var x = 655; 
    dibujarLetra(letra,x,300);
}

function dibujarLetra(letra,x,y) {
    
    pincel.beginPath();
    pincel.strokeStyle = "blue";
    pincel.fillText(letra, x, y);
    pincel.font="bold 30px arial";
}