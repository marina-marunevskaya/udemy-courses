console.log(this); // window object

// person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('Jack', 23);
const anotherPerson = new Person('Jackie', 19);

console.log(person);
console.log(anotherPerson);

console.log(person.age);

function AnotherPerson (name, dateOfBirthday) {
    this.name = name;
    this.birthday = new Date(dateOfBirthday);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const newPerson = new AnotherPerson('John', '9-10-1981');
console.log(newPerson);
console.log(newPerson.calculateAge());
