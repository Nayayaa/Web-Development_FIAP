function somar() {
    let h1 = Number(document.getElementById("n1").value);
    let h2 = Number(document.getElementById("n2").value);
    
    let resultado = h1 + h2;
    
    document.getElementById("resultado").innerHTML = "Resultado da soma: " + resultado;
}

function subtrair() {
    let h1 = Number(document.getElementById("n1").value);
    let h2 = Number(document.getElementById("n2").value);
    
    let resultado = h1 - h2;
    
    document.getElementById("resultado").innerHTML = "Resultado da subtração: " + resultado;
}

function multiplicar() {
    let h1 = Number(document.getElementById("n1").value);
    let h2 = Number(document.getElementById("n2").value);
    
    let resultado = h1 * h2;
    
    document.getElementById("resultado").innerHTML = "Resultado da multiplicação: " + resultado;
}   


function dividir() {
    let h1 = Number(document.getElementById("n1").value);
    let h2 = Number(document.getElementById("n2").value);
    
    let resultado = h1 / h2;
    
    document.getElementById("resultado").innerHTML = "Resultado da divisão: " + resultado;
}