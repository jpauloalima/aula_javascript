//inicio dia 08/06/2021

const prompt = require('prompt-sync')();

(() => {
    //o total de crianca sempre vai ser a soma de countFeminino + countMasculino
    var countFeminino = 0, countMasculino = 0, countYear = 0, countMicrocephaly = 0, countCardiaco = 0, countDiabetes = 0, countHealPlan = 0;

    var stopMenu = true;
    while (stopMenu) {
        var birthYear = prompt("Qual ano de nascimento? ");
        var stopSex = true;
        while (stopSex) {
            console.log("Qual sexo?");
            console.log("M - Masculino");
            console.log("F - Feminino");
            var sexChild = prompt("");
            switch (sexChild.toUpperCase()) {
                case "M":
                    countMasculino++
                    stopSex = false;
                    break;
                case "F":
                    countFeminino++
                    stopSex = false
                    break;
                default:
                    console.log("Por Favor, Escolha uma das opções");
                    break;
            }
        }
        var stopMicrocephaly = true;
        while (stopMicrocephaly) {
            var microcephaly = prompt("possui microcefalia? S/N ");
            switch (microcephaly.toUpperCase()) {
                case "S":
                    countMicrocephaly++
                    stopMicrocephaly = false;
                    break;
                case "N":
                    stopMicrocephaly = false;
                    break;
                default:
                    console.log("Escolha a Opação correta");
            }
        }
        var stopDiabetes = true;
        while (stopDiabetes) {
            var diabetes = prompt("Possui diabetes? S/N ");
            switch (diabetes.toUpperCase()) {
                case "S":
                    countDiabetes++
                    stopDiabetes = false;
                    break;
                case "N":
                    stopDiabetes = false;
                    break;
                default:
                    console.log("Por favor digite novamente");
                    break;
            }
        }
        var stopCardiaco = true;
        while (stopCardiaco) {
            var cardiaco = prompt("Possui problemas cardiacos?  S/N ");
            if (cardiaco.toUpperCase() == "S") {
                countCardiaco++
                stopCardiaco = false;
            } else if (cardiaco.toUpperCase() == "N") {
                stopCardiaco = false;
            } else {
                console.log("Escolha a opçao correta");
            }
        }
        var stopHealtPlan = true;
        while (stopHealtPlan) {
            var healtPlan = prompt("Possui plano de saude? S/N");
            if (healtPlan.toUpperCase() == "S") {
                stopHealtPlan = false;
            } else if (healtPlan.toUpperCase() == "N") {
                countHealPlan++
                stopHealtPlan = false;
            } else {
                console.log("Por favor escolha a opção correta");
            }
        }
        if (birthYear == 2021) {
            countYear++
        }
        var stopMenuGeral = true;
        while (stopMenuGeral) {
            console.log("####### MENU #######");
            console.log("### 1 - Cadastrar");
            console.log("### 2 - Visualizar Informações");
            console.log("### 3 - Sair");
            var menu = prompt("O que voce deseja? ");
            if (menu == 1) {
                stopMenuGeral = false;
            } else if (menu == 2) {
                var totalCrianca = countFeminino + countMasculino;
                console.log("Escolha a opção");
                console.log("1 - Quantidade de crianças cadastrdas");
                console.log("2 - Quantas Crianças nasceram no ano corrente");
                console.log("3 - Percentual de crianças com microcefalia");
                console.log("4 - Percentual de crianças com problemas cardiacos");
                console.log("5 - Percentual de crianças sem plano de saude");
                console.log("6 - Percentual de menino e meninas");
                var visualizarOpcao = prompt("")

                switch (visualizarOpcao) {
                    case "1":
                        console.log(`A quantidade de crianças é de ${totalCrianca} Crianças`);
                        break;
                    case "2":
                        console.log(`A quantidade de crianças que nasceram esse ano é de ${countYear} `);
                        break;
                    case "3":
                        var percentualMicrocefalia = (countMicrocephaly * 100) / totalCrianca;
                        console.log(`Percentual de crianças com microcefalia é de ${percentualMicrocefalia} % `);
                        break;
                    case "4":
                        var percentualCardiaco = (countCardiaco * 100) / totalCrianca;
                        console.log(`O percentual de crianças com problemas cardiacos é de ${percentualCardiaco} %`);
                        break
                    case "5":
                        var percentualHealPlan = (countHealPlan * 100) / totalCrianca;
                        console.log(`O percentual de crianças sem plano de saude é de ${percentualHealPlan} % `);
                        break;
                    case "6":
                        var percentualMeninos = (countMasculino * 100) / totalCrianca;
                        var percentualFeminino = (countFeminino * 100) / totalCrianca;
                        console.log(`O percentual de meninos e meninas é de ${percentualMeninos} % meninos, e de ${percentualFeminino} % meninas `);
                        break;
                    default:
                        break;
                }
                stopMenu = true;
            } else if (menu == 3) {
                console.log("Programa esta sendo encerrado");
                stopMenu = false;
                stopMenuGeral = false;
                break;
            } else {
                console.log("Escolha uma opção");
            }
        }

    }
})();
