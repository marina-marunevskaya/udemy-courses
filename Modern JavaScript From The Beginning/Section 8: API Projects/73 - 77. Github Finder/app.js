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
                        ui.showAlert(
                            'User not found',
                            'alert alert-danger'
                        );
                    } else {
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos);
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        } else {
            ui.clearProfile();
        }
    }
);
