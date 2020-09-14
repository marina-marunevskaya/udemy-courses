const http = new HTTPLib();

http
    .get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));

const newUserData = {
    email: 'e.smith@smith.com',
    name: 'Ellie Smith',
    username: 'elliesmith'
};

http
    .post('https://jsonplaceholder.typicode.com/users', newUserData)
    .then(data => console.log(data))
    .catch(error => console.log(error));

const userData = {
    email: 'l.johnson@johnson.com',
    name: 'Lisa Johnson',
    username: 'lisajohnson'
};

http
    .put('https://jsonplaceholder.typicode.com/users/2', userData)
    .then(data => console.log(data))
    .catch(error => console.log(error));

http
    .delete('https://jsonplaceholder.typicode.com/users/10')
    .then(data => console.log(data))
    .catch(error => console.log(error));
