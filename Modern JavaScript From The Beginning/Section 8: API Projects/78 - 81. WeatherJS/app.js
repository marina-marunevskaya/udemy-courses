const defaultCountry = 'Norway';

const countryAPI = new Country(defaultCountry);

function getCountryInfo () {
    countryAPI
        .getCountryInfo()
        .then(
            data => console.log(data)
        )
        .catch(
            error => console.log(error)
        );
}

document.addEventListener(
    'DOMContentLoaded',
    getCountryInfo
);
