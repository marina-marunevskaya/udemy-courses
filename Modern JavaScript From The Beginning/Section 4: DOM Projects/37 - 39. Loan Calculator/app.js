function clearError () {
    document.querySelector('.alert').remove();
}

function showError (errorMessage) {
    // elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // create div
    const errorDiv = document.createElement('div');
    // add classes
    errorDiv.className = 'alert alert-danger';
    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(errorMessage));

    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // clear error after 3 seconds
    setTimeout(
        clearError,
        3000
    );
}

function calculateResults (event) {
    event.preventDefault();

    // variables
    const amountInput = document.getElementById('amount');
    const interestInput = document.getElementById('interest');
    const yearsInput = document.getElementById('years');

    const monthlyPaymentInput = document.getElementById('monthly-payment');
    const totalPaymentInput = document.getElementById('total-payment');
    const totalInterestInput = document.getElementById('total-interest');

    const principal = parseFloat(amountInput.value);
    const calculatedInterest = parseFloat(interestInput.value) / 100 / 12;
    const calculatedPayments = parseFloat(yearsInput.value) * 12;

    // compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    // clear inputs for output
    monthlyPaymentInput.value = '';
    totalPaymentInput.value = '';
    totalInterestInput.value = '';

    if (isFinite(monthly)) {
        monthlyPaymentInput.value = monthly.toFixed(2);
        totalPaymentInput.value = (monthly * calculatedPayments).toFixed(2);
        totalInterestInput.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Please check your numbers');
    }
}

// submit event
document.getElementById('loan-form').addEventListener(
    'submit',
    calculateResults
);
