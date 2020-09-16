class UI {
    constructor () {
        this.profile = document.getElementById('profile');
    }

    showProfile(profile) {
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
}
