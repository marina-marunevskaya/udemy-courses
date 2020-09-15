const searchInput = document.getElementById('searchInput');

const API = new GitHubAPI();

searchInput.addEventListener(
    'keyup',
    event => {
        const username = event.target.value;

        if (username) {
            API
                .getUser(username)
                .then(data => {
                    if (data.profile.message === 'Not Found') {
                        // show error alert
                    } else {
                        // show profile
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        } else {
            // clear profile
        }
    }
);
