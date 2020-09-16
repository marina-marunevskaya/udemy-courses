class GitHubAPI {
    constructor() {
        this.reposCount = 10;
        this.reposSort = 'created: asc';
    }

    async getUser(username) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${username}`
        );

        const reposResponse = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=${this.reposCount}&sort=${this.reposSort}`
        );

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        };
    }
}
