// iterators
function nameIterator (names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length
                ? {
                    value: names[nextIndex++],
                    done: false
                } 
                : {
                    done: true
                }
        }
    };
}

const names = [
    'Jackie',
    'Rosie',
    'John',
    'Richard'
];

const iterator = nameIterator(names);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// generators
function* sayNames () {
    yield 'Jack';
    yield 'Rose';
    yield 'Max';
}

const name = sayNames();

console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());

function* createIDs () {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const id = createIDs();

console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
