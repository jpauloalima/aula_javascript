// trocar de class para objeto JS
const prompt = require('prompt-sync')();


const visualizarCadastro = (nome, cpf, idade, profissao) => {

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
                var pessoa = {
                    nome: entradaNome,
                    cpf: entradaCpf,
                    idade: entradaIdade,
                    profissao: entradaProfissao
                }
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
                    if (numeroAnterior.nome > proximoNumero.nome) {
                        return 1;
                    }
                }
                const isAsc = (crescenteDecrescente == "1");


                const pessoasResultado = pessoas.sort((x, y) => compareTo(isAsc ? x : y, isAsc ? y : x));
                //console.log(pessoasResultado);

                pessoasResultado.map((pessoa, i) => visualizarCadastro(
                    pessoa.nome,
                    pessoa.cpf,
                    pessoa.idade,
                    pessoa.profissao
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

