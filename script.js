let powerCal = false;
let percal = false;
function addToCal(value) {
    document.getElementById('displayValue').value += value;
}
function equal(value) {
    if (powerCal) {
        let numbers = document.getElementById('displayValue').value.split('^');
        document.getElementById('displayValue').value = Math.pow(numbers[0], numbers[1]);
        powerCal = false;
    }else if(percal){
        let percent = document.getElementById('displayValue').value.split('%');
        let num = percent[0];
        let per = percent[1];
        document.getElementById('displayValue').value = (per / 100)* num;
        percal = false;
    }
    else{
        document.getElementById('displayValue').value = eval(document.getElementById('displayValue').value);
    }

}
function clearValue(value) {
    document.getElementById('displayValue').value = '';
}
function mathCal (mathFunc){
    if (mathFunc === 'pow') {
        powerCal = true;
        document.getElementById('displayValue').value += '^';
    }else if(mathFunc === 'percent'){
        percal = true;
        document.getElementById('displayValue').value += '%';
    }
    else {
        document.getElementById('displayValue').value = Math[mathFunc](document.getElementById('displayValue').value);
    }
}