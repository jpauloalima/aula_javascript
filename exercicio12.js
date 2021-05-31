// armazenar nomes no array
// perguntar se quer continuar armazenando
// imprimir os nomes ao final 
const prompt = require('prompt-sync')();

(() => {
    let produtos = [];
    let condicaoDeParada = true;
    while (condicaoDeParada) {
        const produtoNome = prompt('Digite um produto ');

        produtos.push(produtoNome);
        const respostaCondicao = prompt('Deseja continuar? S/N ');
        if (respostaCondicao.toUpperCase() == 'S') {
            condicaoDeParada = true;
        } else if (respostaCondicao.toUpperCase() == 'N') {
            condicaoDeParada = false;

        } else {
            console.log('Ops... voce digitou algo errado');
        }
    }

    for (var i = 0; i > produtos.length; i++) {
        const currentItem = produtos[i];
        console.log(currentItem)
    }

    /*var names = prompt("Digite o nome do produto ")

    const arr = []
    const continuar = []
    var condicao = true;
    while (condicao) {
        var continuar = prompt("Deseja continuar  (S)(N) ");
        arr.push(names)
        if (continuar.toUpperCase() = "s") {
            condicao = true;
        } else if (continuar.toUpperCase() = "n") {
            condicao = false;
        } else {
            console.log("voce digitou errado")
        }
    }
    for (var i = 0; i < arr.length; i++) {
        const currentItem = arr[i];
        console.log(i)
    }*/
})();

