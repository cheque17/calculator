//Variables to keep 
let firstNumber='';
let operator='';
let secondNumber='';
let inputDisplayValue='0';
let calcWorkingValue;

//Buttons on the calculator
const numberButtons = document.querySelectorAll('.button-number');
const operatorButtons = document.querySelectorAll('.button-operator');
const equalButton = document.querySelector('#equal-botton');
const startButton = document.querySelector('#start');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

//Screen
const screenDisplay = document.querySelector('#screen');
const userInputScreen = document.querySelector('#user-input-screen');
const workScreen = document.querySelector('#work-screen');


//Mathematical operations
function add(a,b) {
    return parseFloat(a) + parseFloat(b);
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

function showOnScreen(screenToBeUsed, valueDisplayed){
    screenToBeUsed.textContent = valueDisplayed;
}



numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(inputDisplayValue);
        console.log(event.target.textContent);
        if (inputDisplayValue == 0) {
            inputDisplayValue = event.target.textContent;
        } else if (inputDisplayValue != 0) {
            inputDisplayValue += event.target.textContent
        }
        showOnScreen(userInputScreen, inputDisplayValue);        
    });
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        firstNumber = inputDisplayValue;
        console.log(firstNumber);
        operator = event.target.textContent;
        calcWorkingValue = inputDisplayValue + ' ' + event.target.textContent;
        showOnScreen(workScreen, calcWorkingValue);
        inputDisplayValue = '0';
    })
})

equalButton.addEventListener('click', (button) => {
    secondNumber=inputDisplayValue;
    workScreen.textContent = operate(firstNumber, operator, secondNumber);
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

