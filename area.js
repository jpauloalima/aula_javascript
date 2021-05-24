const prompt = require('prompt-sync')();

(() => {
    const width = prompt("Qual a largura? ");
    const length = prompt("Qual seu comprimento? ");
    const area = width * length;
    console.log("sua área é: " + area + " metros quadrados");
})();

