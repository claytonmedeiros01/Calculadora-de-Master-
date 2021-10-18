function calcular() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);
    var valor4 = document.getElementById("valor4");

    valor4.value = (valor2 * valor3) / valor1;

    if (valor4.value < 1) {
        alert("Ateção o resultado é  em GRAMAS");
    }
    else if (valor4.value > 0.9) {
        alert("Atenção o resultado é em QUILOS");
    }

}

function limpar() {
    valor1.value = ("")
    valor2.value = ("")
    valor3.value = ("")
    valor4.value = ("")
}
