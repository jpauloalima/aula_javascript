const prompt = require('prompt-sync')();

(() => {
    var boxBee = prompt("Quantas caixas de abelhas tem? ");
    var hickory = prompt("Quantas melgueiras cheias tem? ");

    if (boxBee == hickory) {
        console.log("Já esta pronta para colheita");
        var calc = prompt("Quantos litros colheu? ");
        var price = prompt("Qual valor do litro? ");
        console.log(`Valor total é de R$ ${calc * price} Reais`);
    } else {
        console.log("ainda nao esta pronta");
    }
})();
