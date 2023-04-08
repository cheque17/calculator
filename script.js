//Variables to keep 
let firstNumber='';
let operator='';
let secondNumber='';
let inputDisplayValue='0';
let calcWorkingValue='';
let equalButtonCounter= 0;

//Buttons on the calculator
const numberButtons = document.querySelectorAll('.button-number');
const operatorButtons = document.querySelectorAll('.button-operator');
const equalButton = document.querySelector('#equal-botton');
const dotButton = document.querySelector('.dot-button');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const startButton = document.querySelector('#start');


//Screen
const screenDisplay = document.querySelector('#screen');
const userInputScreen = document.querySelector('#user-input-screen');
const workScreen = document.querySelector('#work-screen');


//Mathematical operations and operation selector function
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


//Event listeners
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (inputDisplayValue == '0') {
            inputDisplayValue = event.target.textContent;
        } else if (inputDisplayValue != '0') {
            inputDisplayValue += event.target.textContent
        }
        equalButtonCounter = 0;
        showOnScreen(userInputScreen, inputDisplayValue);        
    });
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        equalButtonCounter += 1;
        firstNumber = inputDisplayValue;
        operator = event.target.textContent;
        calcWorkingValue = inputDisplayValue + ' ' + event.target.textContent;
        showOnScreen(workScreen, calcWorkingValue);
        inputDisplayValue = '0';
        showOnScreen(userInputScreen, inputDisplayValue);
    })
})

equalButton.addEventListener('click', (button) => {
    if (!firstNumber || equalButtonCounter) {
        return
    } 
    equalButtonCounter +=1;
    secondNumber=inputDisplayValue;
    calcWorkingValue += ' ' + inputDisplayValue; 
    showOnScreen(workScreen, calcWorkingValue);
    inputDisplayValue= operate(firstNumber, operator, secondNumber);
    showOnScreen(userInputScreen, inputDisplayValue);        
})


dotButton.addEventListener('click', (button) => {
    inputDisplayValue += '.';
    showOnScreen(userInputScreen, inputDisplayValue);    
})

clearButton.addEventListener('click', (button) => {
    equalButtonCounter=0;
    firstNumber='';
    operator='';
    secondNumber='';
    inputDisplayValue='0';
    showOnScreen(userInputScreen, inputDisplayValue);
    calcWorkingValue='';
    showOnScreen(workScreen, calcWorkingValue);
})



deleteButton.addEventListener('click', button => {
    let wordLength = inputDisplayValue.length;
    inputDisplayValue = inputDisplayValue.substring(0, (wordLength-1))
    showOnScreen(userInputScreen, inputDisplayValue);
})

