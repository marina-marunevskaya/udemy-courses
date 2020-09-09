const http = new HTTPLib();

http.get(
    'https://jsonplaceholder.typicode.com/posts',
    function (error, responseText) {
        if (error) {
            console.log(error);
        } else {
            console.log(responseText);
        }
    }
);
