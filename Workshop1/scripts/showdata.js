export const showData = async (arrProductos, cards) => {
  const productos = await arrProductos;
  productos.forEach((product) => {
    const { name, precio, imagen, descripcion } = product;
    cards.innerHTML += `
    <div> ${name} ${precio} ${imagen} ${descripcion}</div>
    `;
  });
};
