function getHello () {
    return 'Hello';
}

async function getAsyncHello () {
    return 'Hello';
}

async function getAsyncHelloPromise () {
    const promise = new Promise(
        (resolve, reject) => {
            setTimeout(
                () => resolve('Hello'),
                1000
            );
        }
    );

    const response = await promise;

    return response;
}

console.log(getHello());

getAsyncHello()
.then(
    response => console.log(response)
);

getAsyncHelloPromise()
.then(
    response => console.log(response)
);

async function getUsers () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();

    return users;
}

getUsers()
.then(users => console.log(users))
.catch(error => console.log(error));
