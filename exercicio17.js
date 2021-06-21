const prompt = require('prompt-sync')();

class Pessoa {
    constructor(nome) {
        this.nome = nome;
        this.estaDormindo = false;
    }
    dormir() {
        this.estaDormindo = true;
    }
    acordar() {
        this.estaDormindo = false;
    }
    verificarDormindo() {
        return this.estaDormindo
    }
    alterarNome(nome) {

        this.nome = nome
    }
    getNome() {
        return this.nome
    }
}

(() => {
    var pessoa1 = new Pessoa("fulano");
    console.log(pessoa1.getNome());
    pessoa1.alterarNome("kodss");
    console.log(pessoa1.getNome());
    pessoa1.dormir();
    var estaDormindo = pessoa1.verificarDormindo();
    if (estaDormindo == true) {
        console.log("esta dormindo");
    } else {
        console.log("esta acordado");
    }
})();