let ponto = 0;

function adicionarPonto() {
    ponto++;
    document.getElementById("pontuacao").innerText = ponto;
}

function removerPonto() {
    if (ponto === 0) {
        return;
    } else {
        ponto--;
    }
    document.getElementById("pontuacao").innerText = ponto;
}