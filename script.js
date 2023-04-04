/*
window.addEventListener('keydown', function (e) {
    console.log(e.key);
})

let numberButtons = document.querySelectorAll('.button-number');
numberButtons.forEach( button => button.addEventListener('click', (number) =>{
    console.log(number.data-value);
}))
*/

let firstNumber='';
let operator='';
let secondNumber='';


const numberButtons = document.querySelectorAll('.button-number');
const startButton = document.querySelector('#start');
const operatorButtons = document.querySelectorAll('.button-operator');
const equalButton = document.querySelector('#equal-botton');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

console.log (numberButtons);
console.log(operatorButtons);

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