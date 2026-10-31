function calcular() {
    let preco = Number(document.getElementById("Preco").value);
    let quantidade = Number(document.getElementById("Quantidade").value);

    let total = preco * quantidade;

    document.getElementById("resultado").innerText = "Total da compra: R$ " + total.toFixed(2).replace(".", ",");
}