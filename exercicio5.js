//criar um algoritimo para vendas de frutas
// o usuario irá entrar com a fruta desejada e terá retorno da disponibilidade 

const prompt = require('prompt-sync')();


(() => {

    var fruta = prompt("Qual fruta deseja comprar? ");

    switch (fruta) {
        case "maca":
            return console.log("estamos em falta de maçâ!");
        case "manga":
            return console.log("adcionamos ao seu carrinho!");
        case "goiaba":
            return console.log("aqui estão, são 3 reais o kg!");
        case "acerola":
            prompt("quantos kg deseja? ");
            console.log("esta aqui seu pedido!");
            break;

        default: console.log("nao trabalhamos com esse produto! ");
            break;
    }

})();
