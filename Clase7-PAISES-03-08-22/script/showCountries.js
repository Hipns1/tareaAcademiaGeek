export const showCountries = async (arrayCountries, cards) => {
  const countries = await arrayCountries;
  countries.forEach((country) => {
    const { cca2, flags, name, region, population, capital } = country;
    cards.innerHTML += `
      <div class="card">
        <div class="card-body" >
        <img src=${flags.png} class="card-img-top" alt="...">
          <h5 class="card-title">${name.official}</h5>
          <p>Región: ${region}</p>
          <p>Población: ${population}</p>
          <p>Capital: ${capital}</p>
          <a href="#" id=${cca2} class="btn btn-outline-dark btn-detail" style="background-color: #db7093;">Detail</a>
        </div>
      </div>
    `;
  });
};
