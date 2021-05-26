//perguntar quantas uva tem no cacho
//perguntar se voce quer comer uma uva ou nao 
//se sim voce vai continuar comendo ate acabr o cacho, perguntando sempre se deseja comer novamente.
//caso pare de comer , mostrar quantas uvas forma comidas e quantas restam 

const prompt = require('prompt-sync')();

(() => {
    var quantidadeUva = prompt("Quantas uvas tem no cacho? ");
    console.log(`Existe ${quantidadeUva} no cacho`);

    var uva = [];
    var condicaoParada = true;
    while (condicaoParada) {
        var comerUva = prompt("Voce gostaria de comer uma uva? (S/N) ");
        if (comerUva.toUpperCase() == 'S') {
            condicaoParada = true;
            uva.push("uva");
        } else if (comerUva.toUpperCase() == 'N') {
            condicaoParada = false;
        } else {
            console.log('Escolha entre S ou N');
        }
    }
    var count = 0;
    while (count < uva.length) {
        count++
    }
    var menosUvas = quantidadeUva - uva.length;
    console.log(`voce comeu ${uva.length} uvas`);
    console.log(`ainda restam ${menosUvas}`);
})();
