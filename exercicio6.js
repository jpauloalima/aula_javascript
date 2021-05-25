

const prompt = require('prompt-sync')();


(() => {

    var carMark = ["fiat", "chevrolet", "hyundai", "toyota",];
    var carModel = ["corola", "palio", "onix", "hb20", "creta", "uno", "hilux", "s10", "toro"];

    var count = 0;
    while (count < carMark.length) {
        console.log(carMark[count]);
        count++
    }
    console.log("------------------------------");
    var count = 0;
    while (count < carModel.length) {
        console.log(carModel[count]);
        count++
    }
})();
