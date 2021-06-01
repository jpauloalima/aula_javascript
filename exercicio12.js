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
            //console.log(`Sua lista tem um total de ${produtos.length} itens`);
            //console.log(`Seus itens sao: ${produtos} `)
        } else {
            console.log('Ops... voce digitou algo errado');
        }
    }

    for (var i = 0; i < produtos.length; i++) {
        const currentItem = produtos[i];
        console.log(currentItem);
    }

})();

