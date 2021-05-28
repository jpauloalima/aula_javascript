const prompt = require('prompt-sync')();

(() => {
    console.log("################# ACERTE E GANHE #################")

    var condicaoParada = true;
    while (condicaoParada) {

        var number = prompt("Escolha um numero de 1 à 1000 ");
        if (number == 843 || number == 234) {
            console.log("Parabens voce venceu!!");
            condicaoParada = false;
        } else {
            console.log("Que pena , nao foi dessa vez");
            condicaoParada = true;
        }
    }
})();