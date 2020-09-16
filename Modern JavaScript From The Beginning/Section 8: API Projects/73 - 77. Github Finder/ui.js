class UI {
    constructor () {
        this.profile = document.getElementById('profile');
        this.currentAlert = undefined;
    }

    showProfile (profile) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${profile.avatar_url}">
                        <a class="btn btn-primary btn-block mb-4" href="${profile.html_url}" target="_blank">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">
                            Publis Repos: ${profile.public_repos}
                        </span>
                        <span class="badge badge-secondary">
                            Publis Gists: ${profile.public_gists}
                        </span>
                        <span class="badge badge-success">
                            Followers: ${profile.followers}
                        </span>
                        <span class="badge badge-info">
                            Following: ${profile.following}
                        </span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Company: ${profile.company || 'No Company'}
                            </li>
                            <li class="list-group-item">
                                Website/Blog: ${profile.blog || 'No Website/Blog'}
                            </li>
                            <li class="list-group-item">
                                Location: ${profile.location || 'No Location'}
                            </li>
                            <li class="list-group-item">
                                Member Since: ${profile.created_at}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">
                Latest Repos
            </h3>
            <div id="repos"></div>
        `;
    }

    showRepos (repos) {
        const output = repos.map(
            repo => `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">
                                ${repo.name}
                            </a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">
                                Stars: ${repo.stargazers_count}
                            </span>
                            <span class="badge badge-secondary">
                                Watchers: ${repo.watchers_count}
                            </span>
                            <span class="badge badge-success">
                                Forks: ${repo.forks_count}
                            </span>
                        </div>
                    </div>
                </div>
            `
        ).join('');

        document.getElementById('repos').innerHTML = output;
    }

    clearProfile () {
        this.profile.innerHTML = '';
    }

    clearAlert () {
        if (this.currentAlert) {
            this.currentAlert.remove();
            this.currentAlert = undefined;
        }
    }

    showAlert (message, className) {
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(
            document.createTextNode(message)
        );

        const container = document.querySelector('.search-container');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        this.currentAlert = div;

        setTimeout(
            () => this.clearAlert(),
            3000
        );
    }
}
