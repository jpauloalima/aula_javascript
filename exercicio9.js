//verificar se umm  numeroe esta dentro de um intervalo , enquanto estiver dentro do intervalo, voce continua perguntando 

const prompt = require('prompt-sync')();

(() => {
    var condicaoParada = true;
    while (condicaoParada) {

        var number = prompt("Escolha um numero ");
        if (number >= 1000 && number <= 2000) {
            console.log("está correto, continue até errar");
            //prompt("escolha um numero ")
            condicaoParada = true;
        } else {
            console.log("Acabou a contagem");
            condicaoParada = false;
        }
    }
})();

