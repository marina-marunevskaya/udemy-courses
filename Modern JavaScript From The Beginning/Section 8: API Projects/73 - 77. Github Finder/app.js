const searchInput = document.getElementById('searchInput');

const api = new GitHubAPI();
const ui = new UI();

searchInput.addEventListener(
    'keyup',
    event => {
        const username = event.target.value;

        if (username) {
            api
                .getUser(username)
                .then(data => {
                    if (data.profile.message === 'Not Found') {
                        // show error alert
                    } else {
                        ui.showProfile(data.profile);
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
