//moedas 1, 5, 10, 25, 50 centavos e 1 real
// lear a quantidade de cada tipo de moeda e imprimir a soma delas
const prompt = require('prompt-sync')();

(() => {
    const cent1 = prompt("Quantas moedas de 1 centavo você tem ? ");
    const cent5 = prompt("Quantas moedas de 5 centavos você tem ? ");
    const cent10 = prompt("Quantas moedas de 10 centavos você tem ? ");
    const cent25 = prompt("Quantas moedas de 25 centavos você tem ? ");
    const cent50 = prompt("Quantas moedas de 50 centavos você tem ? ");
    const real1 = prompt("Quantas moedas de 1 real você tem ? ");
    const reslata = (lata * 350);
    const res600 = (garrafa600 * 600);
    const res2 = (garrafa2 * 2000);
    console.log(`você comprou ${reslata} litros de refrigenate de 350ml`);
    console.log(`você comprou ${res600} litros de refrigerante dde 600ml`);
    console.log(`você comprou ${res2} litros de refrigerante de 2 litros`);
    console.log(`voce comprou ${reslata + res600 + res2} litros no total`);



})();
