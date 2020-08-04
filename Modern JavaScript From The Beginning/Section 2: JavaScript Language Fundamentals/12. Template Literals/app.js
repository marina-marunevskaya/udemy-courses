const name = 'John';
const age = '23';
const job = 'Web Developer';
const city = 'Paris';

let html;

// without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

document.body.innerHTML = html;

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';

document.body.innerHTML = html;

function hello() {
    return 'Hello';
}

// with template strings
html = `<ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${ 21 + 2 }</li>
        <li>${ hello() }</li>
        <li>${ age > 30 ? 'Over 30' : 'Under 30' }</li>
    </ul>`;

document.body.innerHTML = html;
