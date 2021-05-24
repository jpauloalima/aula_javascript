
const prompt = require('prompt-sync')();
//Ta certooooo


(() => {
    const lataMenor = prompt("Quantas latas de 350 ml você comprou ? ");
    const garrafaMedia = prompt("Quantas garrafas de 600 ml você comprou ? ");
    const garrafaMaior = prompt("Quantas garrafas de 2 l você comprou ? ");
    const resultadoSomaLata = (lataMenor * 350) / 1000;
    const resultadoSomaMedia = (garrafaMedia * 600) / 1000;
    const reseultadoMaior = (garrafaMaior * 2000) / 1000;




    console.log(`você comprou ${resultadoSomaLata} litros de refrigenate de 350ml`);
    console.log(`você comprou ${resultadoSomaMedia} litros de refrigerante dde 600ml`);
    console.log(`você comprou ${reseultadoMaior} litros de refrigerante de 2 litros`);
    console.log(`voce comprou ${resultadoSomaLata + resultadoSomaMedia + reseultadoMaior} litros no total`);



})();
