function getJokes (event) {
    event.preventDefault();

    const number = document.getElementById('number').value;

    const xhr = new XMLHttpRequest();

    xhr.open(
        'GET',
        `http://api.icndb.com/jokes/random/${number}`,
        true
    );

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output;

            if (response.type === 'success') {
                output = response.value.map(
                    ({ joke }) => `
                        <li>${joke}</li>
                    `
                ).join('');
            } else {
                output = `<li>Something went wrong</li>`;
            }

            document.getElementById('jokes').innerHTML = output;
        }
    };

    xhr.send();
}

document.getElementById('getJokes').addEventListener(
    'click',
    getJokes
);
