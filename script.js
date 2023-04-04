let firstNumber='';
let operator='';
let secondNumber='';
let valueDisplayed='';


const numberButtons = document.querySelectorAll('.button-number');
const startButton = document.querySelector('#start');
const operatorButtons = document.querySelectorAll('.button-operator');
const equalButton = document.querySelector('#equal-botton');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const screenDisplay = document.querySelector('#screen');

numberButtons.forEach((button) => {
    button.addEventListener('click', e => {
        console.log(button.textContent);
    })
})


function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(firstOperand, sign, secondOperand) {
    if (sign == '+') {
        return add(firstOperand, secondOperand);
    } else if ( sign == '-'){
        return substract(firstOperand, secondOperand);
    } else if (sign == '*') {
        return multiply(firstOperand, secondOperand);
    } else if (sign == '/') {
        return divide(firstOperand, secondOperand);
    }
}


