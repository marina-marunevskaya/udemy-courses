function loadData () {
    // create an XHR object
    const xhr = new XMLHttpRequest();

    // open
    xhr.open('GET', 'data.txt', true);

    // optional - used for spinners/loaders
    xhr.onprogress = function () {
        console.log(`readyState value is "${this.readyState}".`);
    };

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('output').innerText = this.responseText;
        }
    };

    xhr.onerror = function () {
        console.log('Request error...');
    };

    xhr.send();

    // readyState values
    // 0 - request not initialized
    // 1 - server connection established
    // 2 - request received
    // 3 - processing request
    // 4 - request finished and response is ready 
}

document.getElementById('button').addEventListener(
    'click',
    loadData
);

// HTTP statuses
// 200 OK
// 403 Forbidden
// 404 Not Found
