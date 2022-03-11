const showData = async (arrProductos, cards) => {
  const productos = await arrProductos;
  productos.forEach((product) => {
    const { name, precio, imagen, descripcion, id } = product;
    cards.innerHTML += `
    <div> ${name} ${precio} 
     <a href="" id="${id}"><img src="${imagen}" alt="imagen"></a>
    </div>
    `;
  });
};
export default showData;
