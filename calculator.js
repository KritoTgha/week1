const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform addition
function add(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Function to perform subtraction
function subtract(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}

// Function to perform multiplication
function multiply(numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}

// Function to perform division
function divide(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            result /= numbers[i];
        } else {
            return 'Error: Division by zero';
        }
    }
    return result;
}

// Main program to take user input and perform calculation
function calculator() {
    rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
        rl.question('Enter numbers separated by commas: ', (input) => {
            const numbers = input.split(',').map(num => parseFloat(num));

            let result;
            switch (operation) {
                case 'add':
                    result = add(numbers);
                    break;
                case 'subtract':
                    result = subtract(numbers);
                    break;
                case 'multiply':
                    result = multiply(numbers);
                    break;
                case 'divide':
                    result = divide(numbers);
                    break;
                default:
                    result = 'Invalid operation';
            }

            console.log('Result: ' + result);

            // Close the readline interface
            rl.close();
        });
    });
}

calculator();
