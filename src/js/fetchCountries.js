export default function fetchCountries(country) {
  return fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  // Якщо користувач ввів назву країни, якої не існує,
  // бекенд поверне не порожній масив, а помилку зі статус кодом 404 - не знайдено.
  // Додай повідомлення "Oops, there is no country with that name" у разі помилки,
  // використовуючи бібліотеку notiflix.
  // if (!response.ok) {
  //   return Notiflix.Notify.failure(
  //     'Oops, there is no country with that name'
  //   );
  // }
  // return response.json;
  // );
}

// export default { fetchCountries };
