//perguntar quais as opcoes deseja selecionar para entrar no proximo menu
//depois que entrar no menu , perguntar se essa informacao que vc quer , no minimo 5
const prompt = require('prompt-sync')();

(() => {
    console.log("Escolha uma das opções abaixo para seguir");
    console.log("1 - Para suporte tecnico");
    console.log("2 - Para financiero");
    console.log("3 - Para sugestoes");
    console.log("4 - Para trabalhar conosco");
    console.log("5 - Para falar com atendente");
    console.log("6 - Para Sair");

    var condicaoParada = true;
    while (condicaoParada) {
        var option = prompt("O que você deseja? ");
        if (option == 1) {
            var optionOne = prompt("voce escolheu suporte tecnico , deseja continuar? S/N ")
            if (optionOne.toUpperCase() == "S") {
                console.log("Qual das opções a seguir voce deseja? ");
                console.log("1 - Para Hardware");
                console.log("2 - Para Software");
                var optionOneOne = prompt("Escolha sua opção ");
                if (optionOneOne == 1) {
                    console.log("Estamos tranferido para suporte Hardware");
                    console.log("Aguarde um momento...");
                    condicaoParada = false
                } else if (optionOneOne == 2) {
                    console.log("Estamos tranferido para suporte Software");
                    console.log("Aguarde um momento...");
                    condicaoParada = false
                } else {
                    condicaoParada = true;
                }
            } else if (optionOne.toUpperCase() == "N") {
                condicaoParada = true;
            } else {
                console.log("ops... voce digitou errado")
                condicaoParada = true;
            }
        } else if (option == 2) {
            var optionTwo = prompt("voce escolheu financeiro , deseja continuar? S/N ")
            if (optionTwo.toUpperCase() == "S") {
                console.log("Qual das opções a seguir voce deseja? ");
                console.log("1 - Para pagamento em atraso");
                console.log("2 - Para pagamento adiantado");
                var optionTwoTwo = prompt("Escolha sua opção ");
                if (optionTwoTwo == 1) {
                    console.log("Seu pagamento tera juros e multas");
                    console.log("Formas de pagamento")
                    console.log("1 - Boleto")
                    console.log("2 - Cartão")
                    console.log("3 - Pix")
                    var latePayment = prompt("Infome qual a forma de pagamento: ");

                    if (latePayment == 1) {
                        var condicaoParadBoleto = true;
                        while (condicaoParadBoleto) {
                            var emailPayment = prompt("Digite o email para enviarmos o boleto: ");
                            var confirmationEmail = prompt(`voce digitou o email ${emailPayment}, esta correto? S/N`);
                            if (confirmationEmail.toUpperCase() == "S") {
                                console.log("Estamos enviando seu email");
                                condicaoParadBoleto = false;
                            } else if (confirmationEmail.toUpperCase() == "N") {
                                console.log("Por favor digite novamente");
                                condicaoParadBoleto = true;
                            }
                        }

                    } else if (latePayment == 2) {
                        var condicaoParadaCartao = true;
                        while (condicaoParadaCartao) {
                            var cardNumber = prompt("Digite o numero do seu cartão: ");
                            var confirmationCard = prompt(`voce digitou o numero do cartão ${cardNumber}, esta correto? S/N`);
                            if (confirmationCard.toUpperCase() == "S") {
                                console.log("Estamos processando seu pagamento");
                                condicaoParadaCartao = false;
                            } else if (confirmationCard.toUpperCase() == "N") {
                                console.log("Por favor digite novamente");
                                condicaoParadaCartao = true;
                            }
                        }
                    } else if (latePayment == 3) {
                        console.log("O numero do Pix é 182948921653283");
                    }
                    condicaoParada = false
                } else if (optionTwoTwo == 2) {
                    console.log("........");
                    console.log("Aguarde um momento...");
                    condicaoParada = false
                } else {
                    condicaoParada = true;
                }
            } else if (optionOne.toUpperCase() == "N") {
                condicaoParada = true;
            } else {
                console.log("ops... voce digitou errado")
                condicaoParada = true;
            }
        } else if (option == 3) {
            console.log("Digite a baixo sua sugestão ");
            prompt();
            console.log("Obrigado pelas sujestões");
            condicaoParada = false;
        } else if (option == 4) {
            var workWithUs = prompt("Gostaria de ser nosso colaborador? S/N ")
            if (workWithUs.toUpperCase() == "S") {
                console.log("Envie seu curriculum para nosso email: ");
                console.log("empresa@teste.com");
                console.log("acesse o site para maiores informações:");
                console.log("empresateste.com.br/trabalhecomnosoco");
                condicaoParada = false;
            } else if (workWithUs.toUpperCase() == "N") {
                console.log("Estamos a disposição");
                condicaoParada = false;
            } else {
                console.log("ops... voce digitou errado")
                condicaoParada = true;
            }
        } else if (option == 5) {
            var talkAttendant = prompt("voce escolheu falar com um atendente , deseja continuar? S/N ")
            if (talkAttendant.toUpperCase() == "S") {
                console.log("Qual tipo de atendimento deseja? ");
                console.log("1 - Chat");
                console.log("2 - Telefone");
                console.log("3 - Email");
                var typeService = prompt("Escolha sua opção ");
                if (typeService == 1) {
                    console.log("Estamos abrindo o chat");
                    console.log("Aguarde um momento...");
                    condicaoParada = false
                } else if (optionOneOne == 2) {
                    console.log("Ligue para o numero: 0800 389 2434");
                    condicaoParada = false
                } else if (typeService == 3) {
                    console.log("envie o email para empresa@teste.com.br")
                    condicaoParada = false;
                }
            } else if (optionOne.toUpperCase() == "N") {
                condicaoParada = true;
            } else {
                console.log("ops... voce digitou errado")
                condicaoParada = true;
            }
        } else if (option == 6) {
            console.log("Atendimento Finalizado")
            condicaoParada = false;
        } else {
            console.log("ops... voce digitou errado ");
            condicaoParada = true;
        }

    }
})();
