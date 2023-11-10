function calculateLoan() {
    // Get the user input from the form
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value;
    var loanTerm = document.getElementById('loanTerm').value;

    // Calculate the monthly interest rate
    var monthlyInterestRate = (interestRate / 100) / 12;

    // Convert loan term in years to number of monthly payments
    var numberOfPayments = loanTerm * 12;

    // Calculate the monthly payment
    var monthlyPayment = loanAmount * monthlyInterestRate / (1 - (Math.pow(1/(1 + monthlyInterestRate), numberOfPayments)));

    // Ensure that we have a number for the monthly payment
    var monthlyPaymentRounded = (monthlyPayment) ? monthlyPayment.toFixed(2) : 'Please fill out all fields.';

    // Display the result
    document.getElementById('calculationResult').innerText = 'Your monthly payment would be: $' + monthlyPaymentRounded;
}
