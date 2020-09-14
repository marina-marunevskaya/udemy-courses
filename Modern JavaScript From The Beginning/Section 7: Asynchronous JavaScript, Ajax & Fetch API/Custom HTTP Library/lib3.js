class HTTPLib {
    async get (url) {
        const response = await fetch(url);
        const responseData = await response.json();

        return responseData;
    }

    async post (url, data) {
        const response = await fetch(
            url,
            {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        );

        const responseData = await response.json();

        return responseData;
    }

    async put (url, data) {
        const response = await fetch(
            url,
            {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT'
            }
        );

        const responseData = await response.json();

        return responseData;
    }

    async delete (url) {
        const response = await fetch(
            url,
            { 
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }
        );

        const responseData = 'Successfully deleted';

        return responseData;
    }
}
