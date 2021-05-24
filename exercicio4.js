const prompt = require('prompt-sync')();

(() => {

    console.log("escolha qual peixe quer informação");
    console.log("betta, kinguios, acara, cascuso");

    var fish = prompt("qual nome do peixe? ");

    // if (fish == "betta") {
    //     console.log("Peixe de porte pequeno e agressivo");
    // } else if (fish == "kinguios") {
    //     console.log("peixe pequeno e docil, vive bem em comunidade");
    // } else if (fish == "acara") {
    //     console.log("peixe com formato triangular");
    // } else if (fish == "cascudo") {
    //     console.log("peixe de porte medio, vive no fundo");
    // } else {
    //     console.log("nao temos informação sobre esse pexe ou digitou o nome errado");
    // }

    switch (fish) {
        case 'betta':
            return console.log("Peixe de porte pequeno e agressivo");
        case 'kinguios':
            return console.log("peixe pequeno e docil, vive bem em comunidade");
        case 'acara':
            return console.log("peixe com formato triangular");
        case 'cascudo':
            return console.log("peixe de porte medio, vive no fundo");
        default:
            return console.log("nao temos informação sobre esse pexe ou digitou o nome errado");
    }



})();
