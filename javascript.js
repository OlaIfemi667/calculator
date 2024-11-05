const NUMBERS = document.querySelectorAll(".number");
const OPERATORS = document.querySelectorAll(".operation");
const egality = document.querySelector("#equalTo")
let result = 0;
let firstVar = null;
let secondVar = null;
let display = "";
let currentOperator = "";

function inputOperand() {
    NUMBERS.forEach(element => {
        element.addEventListener("click", () => {
            if (display.length <= 9) {
                display += element.value;
                textBrowser.textContent = display;
            }
        });
    });
}
function clear(){
    result = 0;
    firstVar = null;
    secondVar = null;
    display = "";
    currentOperator = "";
    textBrowser.textContent = result
}
function inputOperator() {
    OPERATORS.forEach(element => {
        element.addEventListener("click", () => {
            if (firstVar === null) {
                firstVar = Number(display);
            } else if (display !== "") {
                secondVar = Number(display);
                result = operate(currentOperator, firstVar, secondVar);
                textBrowser.textContent = result;
                firstVar = result;
            }
            display = "";
            currentOperator = element.value;
            
        });
    });
    egality.addEventListener("click", () => {
        if (firstVar === null) {
            firstVar = Number(display);
        }
        else if (display !== "") {
            secondVar = Number(display);
            result = operate(currentOperator, firstVar, secondVar);
            textBrowser.textContent = result;
            firstVar = result;
        }
        display = "";
    })
}
function operate(operator, a, b){
    switch (operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "x":
            return a * b;
        case "÷":
            return a / b;
        default:
            return "ERROR"
    }
    
}
function main(){
    textBrowser = document.querySelector("#textBrowser");
    textBrowser.textContent = `${result}`;
    inputOperand();
    inputOperator();
    document.querySelector("#cleanScreen").addEventListener("click", clear);
}

main();