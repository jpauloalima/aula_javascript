//tabela de escolha para lista de compras
//
const prompt = require('prompt-sync')();

(() => {
    var list = [];
    var count = 0;
    while (count < 5) {
        var name = prompt("qual seu nome? ");
        console.log(name);
        list.push(name);
        count = count + 1;
    }
})();
