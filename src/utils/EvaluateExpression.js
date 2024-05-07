function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Function to get precedence of operators
function precedence(operator) {
    switch(operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}

// Function to convert infix expression to postfix
export function infixToPostfix(expression) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    const output = [];
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (!isNaN(parseInt(char))) {
            // If the character is a digit, push it to the output queue
            output.push(char);
        } else if (char === '(') {
            // If the character is an opening parenthesis, push it onto the stack
            stack.push(char);
        } else if (char === ')') {
            // If the character is a closing parenthesis, pop operators from the stack and append to the output until an opening parenthesis is found
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop(); // Discard the '('
        } else if (precedence[char]) {
            // If the character is an operator
            while (stack.length > 0 && precedence[stack[stack.length - 1]] >= precedence[char]) {
                output.push(stack.pop());
            }
            stack.push(char);
        }
    }

    // Append remaining operators from the stack to the output
    while (stack.length > 0) {
        output.push(stack.pop());
    }

    return output.join('');
}


// Function to evaluate postfix expression
export function evaluatePostfix(expression) {
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (!isOperator(char)) {
            stack.push(parseInt(char));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            switch (char) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
            }
        }
    }

    return stack.pop();
}