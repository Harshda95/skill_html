document.addEventListener("DOMContentLoaded", function () {
    let operation = "";
    const operationDisplay = document.getElementById("opperation");
    const resultDisplay = document.getElementById("result");
    const buttons = document.getElementsByClassName("btn");

    function calculateExpression(expression) {
        let numbers = [];
        let operators = [];
        let num = "";

        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];
            
            switch (true) {
                case !isNaN(char) || char === ".":
                    num += char;
                    break;
                case "+-*/%".includes(char):
                    numbers.push(parseFloat(num));
                    operators.push(char);
                    num = "";
                    break;
            }
        }
        numbers.push(parseFloat(num));

        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            switch (operators[i]) {
                case "+": result += numbers[i + 1]; break;
                case "-": result -= numbers[i + 1]; break;
                case "*": result *= numbers[i + 1]; break;
                case "/": result = numbers[i + 1] !== 0 ? result / numbers[i + 1] : "Error"; break;
                case "%": result %= numbers[i + 1]; break;
            }
        }
        return isNaN(result) ? "Error" : result;
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            let value = this.innerText;

            switch (value) {
                case "Ac":
                    operation = "";
                    resultDisplay.innerText = "";
                    break;
                case "del":
                    operation = operation.slice(0, -1);
                    break;
                case "=":
                    resultDisplay.innerText = calculateExpression(operation);
                    break;
                default:
                    operation += value;
            }
            operationDisplay.innerText = operation;
        });
    }
});



