//Qual seu nome? 
//Qual sua idade?
//exibir dias vividos
//sendo que um ano tem 365
//exibir maioridade

const prompt = require('prompt-sync')();

(() => {
    const valor = prompt("Qual o valor ? ");
    const limiteRepeticoes = prompt("qual o limite de repeticoes ");
    // const resposta =

    let count = 0;

    while (count <= limiteRepeticoes) {
        console.log(`${valor} x ${count} = ${valor * count} `);
        //console.log(count);
        count = count + 1
    }

})();
