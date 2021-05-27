//digitar um numero e verificar se o numero digitado esta entre 100 e 1000
//se sim , exibir uma msg diznedno q esta entre 100 e 1000
//se nao , falar que nao esta
const prompt = require('prompt-sync')();

(() => {
    var number = prompt("Digite um numero: ");

    if (number >= 100 && number <= 1000) {
        prompt("digite um numero ")
        console.log("seu numero está entre 100 e 1000 ");

    } else {
        console.log("seu numero nao esta entre 100 e 1000");
    }
})();


