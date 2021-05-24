//moedas 1, 5, 10, 25, 50 centavos e 1 real
// lear a quantidade de cada tipo de moeda e imprimir a soma delas
const prompt = require('prompt-sync')();

(() => {
    const coinOneCent = prompt("quantos moedas de 1 centavo tem? ");
    const coinFiveCent = prompt("quants moedas de 5 centavos tem? ");
    const coinTenCent = prompt("quantas moedas de 10 centavos tem? ");
    const coinTfCent = prompt("quantas moedas de 25 centavos tem? ");
    const coinFtCent = prompt("quantas moedas de 50 centavos tem? ");
    const coinOneReal = prompt("quantas moedas de 1 real você tem? ");

    const oneCentTotal = (
        (parseFloat(coinOneCent) * 1 +
            parseFloat(coinFiveCent) * 5 +
            parseFloat(coinTenCent) * 10 +
            parseFloat(coinTfCent) * 25 +
            parseFloat(coinFtCent) * 50) / 100)
        + parseFloat(coinOneReal);
    console.log(`você tem ${oneCentTotal} Real`);
})();
