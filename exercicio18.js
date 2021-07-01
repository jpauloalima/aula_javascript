/* cadastrar pessoas, usuario vai informar nome , cpf , idade e profissao
tem q ter menu (cadastrar e listar as pessoas)
tem que usar classes
quando for listar as pessoas , tem q ter opcao de escolher em ordem alfabetica e crescente e decrescente
usar metodos, funcoes
usar map para iterar o array;
*/
const prompt = require('prompt-sync')();

class Pessoa {
    constructor(nome, cpf, idade, profissao) {
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
        this.profissao = profissao
    }
    getNome() {
        return this.nome
    }
    setNome(nome) {
        this.nome = nome
    }
    getCpf() {
        return this.cpf
    }
    setCpf(cpf) {
        this.cpf = cpf
    }
    getIdade() {
        return this.idade
    }
    setIdade(idade) {
        this.idade = idade
    }
    getProfissao() {
        return this.profissao
    }
    setPorfissao(profissao) {
        this.profissao = profissao
    }


}

const visualizarCadastro = (somar, nome, cpf, idade, profissao) => {

    somar(nome + cpf)
    console.log(`====== INFORMAÇÕES DO USUARIO ======`);
    console.log("");
    console.log(`NOME -- ${nome}`);
    console.log(`CPF -- ${cpf}`);
    console.log(`IDADE -- ${idade}`);
    console.log(`PROFISSAO -- ${profissao}`);
    console.log("");
}
(() => {
    var pessoas = [];
    var stopMenu = true;
    while (stopMenu) {
        console.log("ESCOLHA UMA OPÇÃO");
        console.log("1 - Cadastrar");
        console.log("2 - Visualiar");
        console.log("3 - Sair");
        var opcaoMenu = prompt("");
        switch (opcaoMenu) {
            case "1":
                var entradaNome = prompt("Digite seu nome:  ");
                var entradaCpf = prompt("Digite seu CPF:  ");
                var entradaIdade = prompt("Digite sua idade:  ");
                var entradaProfissao = prompt("Digite sua profissão:  ");
                var pessoa = new Pessoa(entradaNome, entradaCpf, entradaIdade, entradaProfissao);
                pessoas.push(pessoa);
                break;
            case "2":
                console.log("Qual das seguintes opções de exibição: ");
                console.log("1 - Ordem crescente ");
                console.log("2 - Ordem decrescente ");
                var crescenteDecrescente = prompt("");

                if (crescenteDecrescente != '1' && crescenteDecrescente != '2') {
                    console.log('você digitou errado. escolha 1 ou 2');
                    break;
                }

                const compareTo = function (numeroAnterior, proximoNumero) {
                    if (numeroAnterior.getNome() > proximoNumero.getNome()) {
                        return 1;
                    }
                }
                const isAsc = (crescenteDecrescente == "1");


                const pessoasResultado = pessoas.sort((x, y) => compareTo(isAsc ? x : y, isAsc ? y : x));
                //console.log(pessoasResultado);

                pessoasResultado.map((pessoa, i) => visualizarCadastro(
                    pessoa.getNome(),
                    pessoa.getCpf(),
                    pessoa.getIdade(),
                    pessoa.getProfissao()
                ));

                break;
            case "3":
                stopMenu = false;
                break;

            default:
                console.log("Por favor, escolha uma da opcões");
                break;
        }
    }
})();

