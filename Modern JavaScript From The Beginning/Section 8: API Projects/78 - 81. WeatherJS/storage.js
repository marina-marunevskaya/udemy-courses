const defaultCountry = 'Norway';

class Storage {
    constructor () {
        this.country;
    }

    getCountryData () {
        if ('country' in localStorage) {
            this.country = localStorage.getItem('country');
        } else {
            this.country = defaultCountry;
        }

        return {
            country: this.country
        };
    }

    setCountryData (country) {
        localStorage.setItem('country', country);
    }
}
