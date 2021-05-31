// digitar o nome de um equipamento 
// perguntar o preço do kw/h 
// perguntar quants horas o aparelho ficou ligado por dia
// perguntar a potencia dp aparelho em W
// dizer quanto aparelho gasta no mes
const prompt = require('prompt-sync')();



(() => {
    var name = prompt("Qual nome do aparelho? ");
    var hour = prompt(`Quantas horas o(a) ${name} ficou ligado por dia? `);
    var power = prompt(`Qual a potencia do(a) ${name}? `);
    var price = prompt("Qual valor do Kw/h? ");
    var consumption =
        parseFloat(power / 1000) *
        parseFloat(hour) *
        parseFloat(price) * 30;
    console.log(`voce gastou ${consumption} Reais de energia no mes`);
})();
