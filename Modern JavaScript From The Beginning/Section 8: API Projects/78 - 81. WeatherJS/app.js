const storage = new Storage();
const countryAPI = new Country(storage.getCountryData().country);
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

document.getElementById('changeCountry').addEventListener(
    'click',
    () => {
        const country = document.getElementById('countryInput').value;
        countryAPI.changeCountry(country);
        storage.setCountryData(country);

        getCountryInfo();

        $('#countryModal').modal('hide');
    }
);
