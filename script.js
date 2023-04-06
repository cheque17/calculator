let firstNumber='';
let operator='';
let secondNumber='';
let displayValue='0';


const numberButtons = document.querySelectorAll('.button-number');
const startButton = document.querySelector('#start');
const operatorButtons = document.querySelectorAll('.button-operator');
const equalButton = document.querySelector('#equal-botton');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const screenDisplay = document.querySelector('#screen');


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

function showOnScreen(){
    screenDisplay.textContent = displayValue;
}



numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(displayValue);
        console.log(event.target.textContent);
        if (displayValue == 0) {
            displayValue = event.target.textContent;
        } else if (displayValue != 0) {
            displayValue += event.target.textContent
        }
        showOnScreen();        
    });
})


/*

 numberButtons.forEach((button) => {
    button.addEventListener('click', e => {
        console.log(button.textContent);
    })
})

function enterValue(button) {
    screenDisplay.textContent = button.textContent;
}

*/

