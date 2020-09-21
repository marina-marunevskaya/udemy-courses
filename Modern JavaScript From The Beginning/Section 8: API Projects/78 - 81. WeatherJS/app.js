const defaultCountry = 'Norway';

const countryAPI = new Country(defaultCountry);
const ui = new UI();

function getCountryInfo () {
    countryAPI
        .getCountryInfo()
        .then(
            data => {
                if (data.status === 404) {
                    throw new Error(data.message);
                } else {
                    ui.displayCountryInfo(data[0]);
                }
            }
        )
        .catch(
            error => console.log(error)
        );
}

document.addEventListener(
    'DOMContentLoaded',
    getCountryInfo
);
