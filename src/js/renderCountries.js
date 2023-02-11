import { Notify } from 'notiflix';

export default function renderCountries(dataCountries) {
  const countryList = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');
  let quantityCountries = dataCountries.length;
  let countryItems = [];
  let currentCountry = dataCountries[0];

  if (quantityCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (quantityCountries >= 2 && quantityCountries <= 10) {
    dataCountries.map(country => {
      countryItems.push(`
        <li>
          <img src='${country.flags.svg}' alt='' width=40 />
          <span>${country.name.official}</span>
        </li>`);
    });
    countryInfo.innerHTML = '';
    countryList.innerHTML = countryItems;
  } else {
    countryInfo.innerHTML = `
          <div>
            <img src='${currentCountry.flags.svg}' alt='' width=40 />
          <span>${currentCountry.name.official}</span>
        </div>
        <div >
            <p>Capital: ${currentCountry.capital}</p>
            <p>Population: ${currentCountry.population}</p>
            <p>Languages: ${Object.values(currentCountry.languages).join(
              ', '
            )}</p>
        </div>
    `;
    countryList.innerHTML = '';
  }
}
