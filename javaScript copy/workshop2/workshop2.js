let num1 = parseFloat(prompt("enter the no 1 "))
let num2 = parseFloat(prompt("enter the no 2 "))
let operation = prompt("enter the operation ")

function calculateExpression(p1, ch, p2) {

    switch (ch) {
        case '+':
            return p1 + p2

            break;
        case '-':
            return p1 - p2

            break;

        case '*':
            return p1 * p2

            break;

        case '/':
            return p2 !== 0 ? p1 / p2 : 'error devision by zero';

            break;



        default:

            return 'error plese enter valid operation'
            break;
    }

}


alert(calculateExpression(num1, operation, num2))