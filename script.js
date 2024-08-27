// function calculate() {
//     const expression = document.getElementById("expression").value.trim();
    
//     if (expression === "") {
//         document.getElementById("result").innerText = "Please enter an expression.";
//         return;
//     }

//     const parts = expression.match(/([-+*/])\s*(-?\d+)\s*(-?\d+)/);
    
//     if (!parts) {
//         document.getElementById("result").innerText = "Invalid expression format.";
//         return;
//     }

//     const operator = parts[1];
//     const operand1 = parseFloat(parts[2]);
//     const operand2 = parseFloat(parts[3]);

//     let result;
    
//     switch (operator) {
//         case '+':
//             result = operand1 + operand2;
//             break;
//         case '-':
//             result = operand1 - operand2;
//             break;
//         case '*':
//             result = operand1 * operand2;
//             break;
//         case '/':
//             if (operand2 === 0) {
//                 result = "Error: Division by zero";
//             } else {
//                 result = operand1 / operand2;
//             }
//             break;
//         default:
//             result = "Invalid operator";
//     }

//     document.getElementById("result").innerText = `Result: ${result}`;
// }


function appendToExpression(value) {
    const expressionField = document.getElementById("expression");
    expressionField.value += value;
}

function clearExpression() {
    document.getElementById("expression").value = "";
    document.getElementById("result").innerText = "";
}

function calculate() {
    const expression = document.getElementById("expression").value.trim();

    if (expression === "") {
        document.getElementById("result").innerText = "Please enter an expression.";
        return;
    }

    const parts = expression.match(/([-+*/])\s*(-?\d+)\s*(-?\d+)/);
    
    if (!parts) {
        document.getElementById("result").innerText = "Invalid expression format.";
        return;
    }

    const operator = parts[1];
    const operand1 = parseFloat(parts[2]);
    const operand2 = parseFloat(parts[3]);

    let result;
    
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                result = "Error: Division by zero";
            } else {
                result = operand1 / operand2;
            }
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}
