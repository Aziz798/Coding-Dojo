let input = document.getElementById('diplay');
let currentNumber = '';
let firstNumber = '';
let operator = '';
var equal=document.querySelector('.equal-sign');

function press(number) {
    currentNumber += number;
    input.value = currentNumber;
}

function setOP(op) {
    if (firstNumber === '') {
        firstNumber = parseFloat(currentNumber);
        operator = op;
        currentNumber = '';
    } else if (currentNumber !== '') {
        let secondNumber = parseFloat(currentNumber);
        firstNumber = calculate(firstNumber, secondNumber, operator);
        operator = op;
        currentNumber = '';
        input.value = firstNumber;
    } else {
        operator = op;
    }
}

function calculate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        break;
        case '-':
            return num1 - num2;
        break;
        case '*':
            return num1 * num2;
        break;
        case '/':
            return num1 / num2;
        break;
    }
}

function clr() {
    currentNumber = '';
    firstNumber = '';
    operator = '';
    input.value = '';
}



function doOperation(){
    if (firstNumber !== null && currentNumber !== '') {
        firstNumber = calculate(firstNumber, parseFloat(currentNumber), operator);
        input.value = firstNumber;
        currentNumber = '';
        operator = null;
    }
    else{

    }
}


