try {
    myFunction(); // a reference error
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError);
} finally {
    console.log('Finally runs regardless of results...');
}

console.log('---');

try {
    null.myFunction();
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof TypeError);
} finally {
    console.log('Finally runs regardless of results...');
}

console.log('---');

try {
    console.log(eval('Hello World'));
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof SyntaxError);
} finally {
    console.log('Finally runs regardless of results...');
}

console.log('---');

try {
    decodeURIComponent('%');
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof URIError);
} finally {
    console.log('Finally runs regardless of results...');
}

console.log('---');

const user = {
    email: 'j.smith@gmail.com'
};

try {
    if (!('name' in user)) {
        throw 'User has no name';
    }
} catch (error) {
    console.log(error);
} finally {
    console.log('Finally runs regardless of results...');
}

console.log('---');

try {
    if (!('name' in user)) {
        throw new SyntaxError('User has no name');
    }
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof SyntaxError);
} finally {
    console.log('Finally runs regardless of results...');
}

console.log('---');

console.log('Program continues...');
