    
    // Get the button element
const performOperation = document.getElementById('performOperation');

// Add event listener to the button
performOperation.addEventListener('click', function() {
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Debugger: Inspect after validating the numbers
    debugger;  // Pause here to check if the numbers are valid
    
    // Perform multiple operations simultaneously
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';

     // Debugger: Inspect results of the operations
     debugger;  // Pause here to check the results of the calculations

        // Display the results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <strong>Results:</strong><br>
        Addition: ${addition}<br>
        Subtraction: ${subtraction}<br>
        Multiplication: ${multiplication}<br>
        Division: ${division}
    `;
});
    
                