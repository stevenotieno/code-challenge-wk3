const prompt = require("prompt-sync")();
const carSpeed = prompt ("Input your car Speed: ");
let points = (carSpeed - 70)/5;
function speed() {
    if (carSpeed < 70 ){
    console.log ("Ok");
}
else if (points > 12) {
    console.log("License suspended");
}
else {
    console.log('Points: ${points}');
}
}

speed();