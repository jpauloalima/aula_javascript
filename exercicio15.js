const prompt = require('prompt-sync')();

(() => {

    console.log("Escolha uma das opções abaixo para seguir");
    console.log("1 - Para suporte tecnico");
    console.log("2 - Para financiero");
    console.log("3 - Para sugestoes");
    console.log("4 - Para trabalhar conosco");
    console.log("5 - Para falar com atendente");
    console.log("6 - Para Sair");


    var stopCondition = true;
    while (stopCondition) {
        var option = prompt("O que voce deseja? ");
        switch (option) {
            case '1':
                var optionSupport = prompt("Voce escolheu suporte, deseja continuar? S/N ");
                switch (optionSupport.toUpperCase()) {
                    case 'S':
                        console.log("1 - Suporte Hardware");
                        console.log("2 - Suporte Software");
                        var optionSupportNext = prompt("Qual das opcoes deseja ");
                        switch (optionSupportNext) {
                            case '1':
                                return console.log("estamos transferindo para o suporte Hardware")
                            case '2':
                                return console.log("estamos transferindo para o suporte Software");
                            default:
                                console.log("escolha a opcao correta");
                        }
                    case 'N':
                        return console.log("escolha uma nova opção")
                }
                break;
            case '2':
                console.log("Você escolheu financeiro");
                var optionFinance = prompt("Deseja continuar? ");
                switch (optionFinance.toUpperCase()) {
                    case "S":
                        console.log("1 - Pagamento em atraso");
                        console.log("2 - Pagamento adiantado");
                        var optionFinanceNext = prompt("escolha uma opção");
                        switch (optionFinanceNext) {
                            case "1":
                                var stopEmailConfirmation = true;
                                while (stopEmailConfirmation) {
                                    var emailPayment = prompt("Digite seu email para enviarmos o boleto ");
                                    var emailConfirmation = prompt(`seu email é: ${emailPayment}, esta correto? S/N`);
                                    switch (emailConfirmation.toUpperCase()) {
                                        case "S":
                                            return console.log("estamos enviando seu email");
                                        //stopEmailConfirmation = false;
                                        case "N":
                                            console.log("Por favor, digite novamente");
                                            stopEmailConfirmation = true;
                                            break;
                                        default:
                                            console.log("voce digitou errado")
                                    }break;
                                }
                        }
                        stopCondition = false;
                }break;
            case '3':
                console.log("Queremo ouvir suas sugestões");
                console.log("Digite no campo abaixo:");
                prompt("")
                break
            case '4':
                var work = prompt("Gostaria de ser nosso colaborador? S/N");
                switch (work.toUpperCase()) {
                    case "S":
                        console.log("######## Por favor, Digite seus dados nos campos abaixo ########");
                        var name = prompt("Digite seu nome completo:");
                        var address = prompt("Digite seu endereço:");
                        var phone = prompt("Digite se telefone:");
                        var emailWork = prompt("Digite seu email:");
                        var office = prompt("Digite o cargo desejado:");
                        console.log("Confirme se suas informações estãocorretas");
                        console.log(`Nome: ${name}`);
                        console.log(`Endereço: ${address}`);
                        console.log(`Telefone: ${phone}`);
                        console.log(`Email: ${emailWork}`);
                        console.log(`Cargo: ${office}`);
                        //var candidateData =
                        //    [name,
                        //       address,
                        //       phone,
                        //      emailWork,
                        //     office];
                        //console.log(candidateData);
                        stopCondition = false;
                }
                break;
            case '5':

            case '6':

            default:
                console.log("ops... voce digitou algo errado");
        }
    }
})();
