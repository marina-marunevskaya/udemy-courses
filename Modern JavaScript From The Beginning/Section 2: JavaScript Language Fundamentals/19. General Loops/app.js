// for 
console.log('for');

for (let i = 0; i < 10; i++) {
    console.log(`Current value is ${i}.`)
}

console.log('---');

for (let i = 0; i <= 10; i++) {
    console.log(`Current value is ${i}.`)
}

console.log('---');

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favourite number');
    }

    console.log(`Current value is ${i}.`)
}

console.log('---');

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favourite number');
        continue;
    }

    console.log(`Current value is ${i}.`)
}

console.log('---');

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favourite number');
        continue;
    }

    if (i === 5) {
        console.log('Stop the loop');
        break;
    }

    console.log(`Current value is ${i}.`)
}

console.log('---');

// while
console.log('while');

let j = 0;

while (j < 10) {
    console.log(`Current value is ${j}`);
    j++;
}

console.log('---');

// do while
console.log('do while');

let k = 0;

do {
    console.log(`Current value is ${k}`);
    k++;
} while (k < 10);

console.log('---');

let l = 100;

do {
    console.log(`Current value is ${l}`);
    l++;
} while (l < 10);

console.log('---');

// array

const cars = [
    'BMW',
    'Volkswagen',
    'Skoda',
    'Toyota',
    'Renault',
    'Honda'
];

for (let i = 0; i < cars.length; i++) {
    console.log(`Current car is ${cars[i]}.`);
}

console.log('---');

// forEach()
cars.forEach(function (car) {
    console.log(`Current car is ${car}.`);
});

console.log('---');

cars.forEach(function (car, index) {
    console.log(`Current car is ${car}, its index is ${index}.`);
});

console.log('---');

cars.forEach(function (car, index, cars) {
    console.log(`Current car is ${car}, its index is ${index}.`);
    console.log(cars);
});

console.log('---');

// map()
const users = [
    {
        id: 1,
        name: 'Steve'
    },
    {
        id: 2,
        name: 'Rachel'
    },
    {
        id: 3,
        name: 'Jack'
    },
    {
        id: 4,
        name: 'Josie'
    }
];

const ids = users.map(function (user) {
    return user.id;
});

console.log(ids);
console.log('---');

// for in
const user = {
    firstName: 'Josie',
    lastName: 'Michels',
    age: 25
};

for (let property in user) {
    console.log(`${property}: ${user[property]}`);
}
