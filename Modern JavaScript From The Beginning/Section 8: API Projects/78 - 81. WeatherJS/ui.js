class UI {
    constructor () {
        this.flag = document.getElementById('flag');
        this.country = document.getElementById('country');
        this.region = document.getElementById('region');
        this.capital = document.getElementById('capital');
        this.population = document.getElementById('population');
        this.currencies = document.getElementById('currencies');
        this.languages = document.getElementById('languages');
        this.timezones = document.getElementById('timezones');
    }

    displayCountryInfo (countryInfo) {
        this.flag.setAttribute('alt', `The flag of ${countryInfo.name}`);
        this.flag.setAttribute('src', countryInfo.flag);

        this.country.textContent = countryInfo.name;

        this.region.textContent = countryInfo.subregion || countryInfo.region;

        this.capital.textContent = countryInfo.capital;

        this.population.textContent = countryInfo.population;

        this.currencies.innerHTML = countryInfo.currencies.map(
            currency => `
                <li class="list-group-item">
                    ${currency.name} (${currency.code}, ${currency.symbol})
                </li>
            `
        ).join('');

        this.languages.innerHTML = countryInfo.languages.map(
            language => `
                <li class="list-group-item">
                    ${language.name}
                </li>
            `
        ).join('');

        this.timezones.innerHTML = countryInfo.timezones.map(
            timezone => `
                <li class="list-group-item">
                    ${timezone}
                </li>
            `
        ).join('');
    }
}
