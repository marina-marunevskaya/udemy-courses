// person constructor
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// greeting
Person.prototype.greeting = function () {
    return `Hello, ${this.firstName} ${this.lastName}!`;
};

const personOne = new Person('Jack', 'Smith');

console.log(personOne.greeting());

// customer constructor
function Customer (firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make Customer.prototype return Customer
Customer.prototype.constructor = Customer;

// Customer greeting
Customer.prototype.greeting = function () {
    return `Hello, ${this.firstName} ${this.lastName}! Welcome to our company!`;
};

const customerOne = new Customer('Mary', 'Johnson', '123-45-67-89', 'premium');

console.log(customerOne);

console.log(customerOne.greeting());
