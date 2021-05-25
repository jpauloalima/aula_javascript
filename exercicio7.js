

//objetivo 
//apresentar o nome da pessoa, 
//informar quantas pessoas tem na familia dele
//tratar p ele n digitar familiarnome em branco
//
//


const prompt = require('prompt-sync')();


(() => {

    console.log('-------------Bem Vindo-------------');
    const name = prompt('Qual o seu nome? ');


    let family = [];
    let condicaoDeParada = true;
    while (condicaoDeParada) {
        const familiarNome = prompt('Digite o nome do seu familiar ');

        family.push(familiarNome);
        const respostaCondicao = prompt('Deseja continuar? S/N ');
        if (respostaCondicao.toUpperCase() == 'S') {
            condicaoDeParada = true;
        } else if (respostaCondicao.toUpperCase() == 'N') {
            condicaoDeParada = false;

        } else {
            console.log('Ops... voce digitou algo errado');
        }
    }

    console.log(`Olá ${name} sua familia possui ${family.length} pessoas`);


    var count = 0;
    while (count < family.length) {
        console.log(family[count]);
        count++
    }
})();
