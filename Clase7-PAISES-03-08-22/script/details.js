const showDetails = () => {
	const container = document.querySelector('#app');
	const country = JSON.parse(localStorage.getItem("Country"));
	const { name, flags, population, region, capital } = country;
	const { official } = name;
	const { svg } = flags;

	const card = `
      <div class="card">
        <div class="card-body" >
        <img src=${svg} class="card-img-top" alt="${official}">
          <h5 class="card-title">${official}</h5>
          <p>País: ${official}</p>
          <p>Región: ${region}</p>
          <p>Población: ${population}</p>
          <p>Capital: ${capital}</p>
        </div>
      </div>
      `;

	container.insertAdjacentHTML('beforeend', card);
};

document.addEventListener('DOMContentLoaded', showDetails);
