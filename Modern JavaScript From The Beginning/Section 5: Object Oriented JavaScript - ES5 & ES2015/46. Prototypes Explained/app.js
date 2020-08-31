// Object.prototype
// Person.prototype

function Person (firstName, lastName, dateOfBirthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dateOfBirthday);
}

// calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

// mary
Person.prototype.mary = function (newLastName) {
    this.lastName = newLastName;
}

const johnWednesday = new Person('John', 'Wednesday', '8-12-90');
const marySmith = new Person('Mary', 'Smith', 'March 20 1978');

console.log(johnWednesday);
console.log(marySmith);

console.log(johnWednesday.calculateAge());

console.log(marySmith.getFullName());

marySmith.mary('Stievenson');

console.log(marySmith.getFullName());

// hasOwnProperty()
console.log(johnWednesday.hasOwnProperty('firstName'));
console.log(johnWednesday.hasOwnProperty('getFullName'));
