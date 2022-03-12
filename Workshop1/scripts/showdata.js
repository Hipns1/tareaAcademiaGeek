const showData = async (arrProductos, cards) => {
  const productos = await arrProductos;
  productos.forEach((product) => {
    const { name, precio, imagen, id } = product;
    cards.innerHTML += `
    <div class="cardContainer">
      <div class="cards">
        <div class="imgCard">
          <a href="#home"><img id=${id} class="btnimagen" src="${imagen}" alt="imagen"></a>
        </div>
        <h2>${name}</h2>
        <h3>${precio}</h3>
      </div>
    </div>
    `;
  });
};
export default showData;
