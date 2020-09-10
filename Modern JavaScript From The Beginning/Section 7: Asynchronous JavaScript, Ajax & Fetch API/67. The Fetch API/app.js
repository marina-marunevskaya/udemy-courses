const output = document.getElementById('output');

function getTextData () {
    fetch('data.txt')
    .then(
        response => response.text()
    )
    .then(
        response => output.innerHTML = response
    )
    .catch(
        error => console.log(error)
    );
}

function getJSONData () {
    fetch('data.json')
    .then(
        response => response.json()
    )
    .then(
        response => {
            output.innerHTML = `
                <ul>
                    ${
                        response.map(
                            ({title}) => `
                                <li>${title}</li>
                            `
                        ).join('')
                    }
                </ul>
            `;
        }
    )
    .catch(
        error => console.log(error)
    );
}

function getAPIData () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
        response => response.json()
    )
    .then(
        response => {
            output.innerHTML = `
                <ul>
                    ${
                        response.map(
                            ({title}) => `
                                <li>${title}</li>
                            `
                        ).join('')
                    }
                </ul>
            `;
        }
    )
    .catch(
        error => console.log(error)
    );
}

document.getElementById('button1').addEventListener(
    'click',
    getTextData
);

document.getElementById('button2').addEventListener(
    'click',
    getJSONData
);

document.getElementById('button3').addEventListener(
    'click',
    getAPIData
);
