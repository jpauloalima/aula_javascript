const prompt = require('prompt-sync')();

(() => {

    console.log("Escolha uma das opções abaixo para seguir");
    console.log("1 - Para suporte tecnico");
    console.log("2 - Para financiero");
    console.log("3 - Para sugestoes");
    console.log("4 - Para trabalhar conosco");
    console.log("5 - Para falar com atendente");
    console.log("6 - Para Sair");

    var option = prompt("O que voce deseja? ");

    switch (option) {

        case '1':
            var optionSupport = prompt("Voce escolheu suporte, deseja continuar? S/N ");

            switch (optionSupport.toUpperCase()) {
                case 'S':
                    console.log("1 - Suporte Hardware");
                    console.log("2 - Suporte Software");
                    var optionSupportNext = prompt("Qual das opcoes deseja");
                    break;
                case 'N':
                    return console.log("Estamos transferindo para a area de hardware ");
            }
            break;
        case '2':
            return console.log("Estamos transferindo para a area de software ");
        case '2':
            var optionFinance = prompt("voce escolheu financeiro , deseja continuar? S/N ")
            // if (optionFinance.toUpperCase == "S") {
            // console.log("Qual das opçoes abaixo voce deseja?")
            //  console.log("1 - Para pagamento em atraso");
            //  console.log("2 - Para pagameno adiantado");
            break;



        case '3':
            console.log("Queremo ouvir suas sugestões")
            console.log("Digite no campo abaixo:");
            prompt("")
            break
        case '4':

        case '5':

        case '6':

        default:
            console.log("ops... voce digitou algo errado");
    }




})();
