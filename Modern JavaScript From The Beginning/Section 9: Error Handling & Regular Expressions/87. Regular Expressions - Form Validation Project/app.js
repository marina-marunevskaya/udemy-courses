const nameReg = /^[a-zA-Z]{2,10}$/;
const zipcodeReg = /^[-0-9]{5}(-[0-9]{4})?$/;
const emailReg = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;
const phoneReg = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

const nameInput = document.getElementById('nameInput');
const zipcodeInput = document.getElementById('zipcodeInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');

function validateName () {
    if (nameReg.test(nameInput.value)) {
        nameInput.classList.remove('is-invalid');
    } else {
        nameInput.classList.add('is-invalid');
    }
}

function validateZipcode () {
    if (zipcodeReg.test(zipcodeInput.value)) {
        zipcodeInput.classList.remove('is-invalid');
    } else {
        zipcodeInput.classList.add('is-invalid');
    }
}

function validateEmail () {
    if (emailReg.test(emailInput.value)) {
        emailInput.classList.remove('is-invalid');
    } else {
        emailInput.classList.add('is-invalid');
    }
}

function validatePhone () {
    if (phoneReg.test(phoneInput.value)) {
        phoneInput.classList.remove('is-invalid');
    } else {
        phoneInput.classList.add('is-invalid');
    }
}

if (nameInput) {
    nameInput.addEventListener(
        'blur',
        validateName
    );
}

if (zipcodeInput) {
    zipcodeInput.addEventListener(
        'blur',
        validateZipcode
    );
}

if (emailInput) {
    emailInput.addEventListener(
        'blur',
        validateEmail
    );
}

if (phoneInput) {
    phoneInput.addEventListener(
        'blur',
        validatePhone
    );
}
