const posts = [
    {
        title: 'Post #1',
        body: 'This is a post #1'
    },
    {
        title: 'Post #2',
        body: 'This is a post #2'
    },
    {
        title: 'Post #3',
        body: 'This is a post #3'
    }
];

function createPost (post) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    posts.push(post);
                    resolve();
                },
                2000
            );
        }
    );
}

function getPosts () {
    setTimeout(
        function () {
            const output = `
                <ul>
                    ${
                        posts.map(
                            ({title}) => `
                                <li>${title}</li>
                            `
                        ).join('')
                    }
                </ul>
            `;

            document.body.innerHTML = output;
        },
        1000
    );
}

createPost(
    {
        title: 'Post #4',
        body: 'This is a post #4'
    }
).then(getPosts);

getPosts();
