const http = new HTTPLib();

/*http.get(
    'https://jsonplaceholder.typicode.com/posts',
    function (error, responseText) {
        if (error) {
            console.log(error);
        } else {
            console.log(responseText);
        }
    }
);*/

/*
http.get(
    'https://jsonplaceholder.typicode.com/posts/1',
    function (error, responseText) {
        if (error) {
            console.log(error);
        } else {
            console.log(responseText);
        }
    }
);
*/

/*const post = {
    userId: 1,
    title: 'Create a new post',
    body: 'This is a new post' 
};

http.post(
    'https://jsonplaceholder.typicode.com/posts',
    post,
    function (error, responseText) {
        if (error) {
            console.log(error);
        } else {
            console.log(responseText);
        }
    }
);*/

/*const post = {
    userId: 1,
    title: 'Edit an existing post',
    body: 'This is a new version of the post' 
};

http.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    post,
    function (error, responseText) {
        if (error) {
            console.log(error);
        } else {
            console.log(responseText);
        }
    }
);*/

http.delete(
    'https://jsonplaceholder.typicode.com/posts/1',
    function (error, responseText) {
        if (error) {
            console.log(error);
        } else {
            console.log(responseText);
        }
    }
);
