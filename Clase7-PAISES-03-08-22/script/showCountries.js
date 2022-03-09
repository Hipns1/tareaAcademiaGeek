export const showCountries = async (arrayCountries, cards) => {
  const countries = await arrayCountries;
  countries.forEach((country) => {
    const { cca2, flags, name, region, population, capital } = country;
    cards.innerHTML += `
      <div class="card">
        <div class="card-body">
          <img src=${flags.png} class="card-img-top" alt="...">
          <div class="textContainer">
              <h5 class="card-title">${name.official}</h5>
              <p><b>Region:</b> ${region}</p>
              <p><b>Population:</b> ${population}</p>
              <p><b>Capital:</b> ${capital}</p>
              <div class="btnDetail">
                <a  href="#" id=${cca2} class="btn btn-outline-dark btn-detail">Detail</a>
              </div>
          </div>
        </div>
      </div>
    `;
  });
};
