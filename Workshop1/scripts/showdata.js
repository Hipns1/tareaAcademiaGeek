const showData = async (arrProductos, cards) => {
  const productos = await arrProductos;
  productos.forEach((product) => {
    const { name, precio, imagen, descripcion } = product;
    cards.innerHTML += `
    <div> ${name} ${precio} 
    <img src="${imagen}" alt="imagen">
    ${descripcion}</div>
    `;
  });
};
export default showData