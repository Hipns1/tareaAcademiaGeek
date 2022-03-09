const showDetails = () => {
	const container = document.querySelector('#app');
	const country = JSON.parse(localStorage.getItem("Country"));
	const { name, flags, population, region, capital, subregion, topLevelDomain } = country;
	const { official } = name;
	const { svg } = flags;


	const card = `
      <div class="card">
        <div class="card-body" >
            <img src=${svg} class="card-img-top" alt="${official}">
            <div class="textDetails">
                <h5 class="card-title">${official}</h5>
                <p><b>Population:</b> ${population}</p>
                <p><b>Región:</b> ${region}</p>
                <p><b>Subregion:</b> ${subregion}</p>
                <p><b>Capital:</b> ${capital}</p>
            </div>
            
            
        </div>
      </div>
      `;

	container.insertAdjacentHTML('beforeend', card);
};

document.addEventListener('DOMContentLoaded', showDetails);


//ESCOGER TEMA PREDETERMINADO
const temaPredetermiado = () => {
  const temaDetails = JSON.parse(localStorage.getItem("tema"));
  console.log(temaDetails)
  if(temaDetails === "dark"){
    document.getElementById("bodyTheme").classList = "dark";
    document.getElementById("imgTheme").style.display = "none";
    document.getElementById("imgThemeWhite").style.display = "block"
  }else{
    document.getElementById("bodyTheme").classList = "light";
    document.getElementById("imgTheme").style.display = "block";
    document.getElementById("imgThemeWhite").style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', temaPredetermiado);


//ESCOGER TEMA
const themeBtn = document.getElementById("themeBtn")

themeBtn.addEventListener("click", () => {
  if(themeBtn.checked){
    const themeDark = document.getElementById("bodyTheme").classList = "dark";
    localStorage.setItem("tema", JSON.stringify(themeDark));
    document.getElementById("imgTheme").style.display = "none";
    document.getElementById("imgThemeWhite").style.display = "block"
  }else{
    const themeLight = document.getElementById("bodyTheme").classList = "light";
    localStorage.setItem("tema", JSON.stringify(themeLight));
    document.getElementById("imgTheme").style.display = "block";
    document.getElementById("imgThemeWhite").style.display = "none";
  }
})

