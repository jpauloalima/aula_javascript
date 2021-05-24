//quantos cavalos tem? Calcular quantidades de cavalos * 4 patas

const prompt = require('prompt-sync')();

(() => {
    const horses = prompt("Quantos cavalos tem? ");
    const horseshoes = horses * 4;

    console.log(`Você vai precisar de ${horseshoes} ferraduras`)

})();

