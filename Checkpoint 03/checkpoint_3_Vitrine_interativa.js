function trocarProduto() {
    const img = document.getElementById("produto");
    const imagemAtual = img.getAttribute("src");

    if (imagemAtual === "RTX.png") {
        img.setAttribute("src", "RX.png");
        img.setAttribute("alt","produto2" );
    } else {
        img.setAttribute("src", "RTX.png");
        img.setAttribute("alt", "produto1");
    }
}