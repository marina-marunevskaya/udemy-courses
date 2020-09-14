class HTTPLib {
    get (url) {
        return new Promise(
            (resolve, reject) => {
                fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
            }
        );
    }

    post (url, data) {
        return new Promise(
            (resolve, reject) => {
                fetch(
                    url,
                    {
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST'
                    }
                )
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
            }
        );
    }

    put (url, data) {
        return new Promise(
            (resolve, reject) => {
                fetch(
                    url,
                    {
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'PUT'
                    }
                )
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
            }
        );
    }

    delete (url) {
        return new Promise(
            (resolve, reject) => {
                fetch(
                    url,
                    { 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'DELETE'
                    }
                )
                .then(response => response.json())
                .then(() => resolve('Successfully deleted'))
                .catch(error => reject(error));
            }
        );
    }
}
