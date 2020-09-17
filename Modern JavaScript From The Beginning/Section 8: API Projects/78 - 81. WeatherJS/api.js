class Country {
    constructor (name) {
        this.name = name;
    }

    async getCountryInfo () {
        const response = await fetch(
            `https://restcountries.eu/rest/v2/name/${encodeURIComponent(this.name)}`
        );

        const countryInfo = await response.json();

        return countryInfo;
    }

    changeCountry (name) {
        this.name = name;
    }
}
