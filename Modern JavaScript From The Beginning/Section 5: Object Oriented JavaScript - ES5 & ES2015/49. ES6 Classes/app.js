class Person {
    constructor (firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dateOfBirth);
    }

    greeting () {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }

    calculateAge () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    mary (newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers (x, y) {
        return x + y;
    }
}

const vicky = new Person('Vicky', 'Mayers', '11-13-1995');

console.log(vicky);
console.log(vicky.greeting());
console.log(vicky.calculateAge());
vicky.mary('Weekend');
console.log(vicky.greeting());

console.log(Person.addNumbers(4, 15));
