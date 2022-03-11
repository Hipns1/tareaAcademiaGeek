const showData = async (arrProductos, cards) => {
  const productos = await arrProductos;
  productos.forEach((product) => {
    const { name, precio, imagen, descripcion, id } = product;
    cards.innerHTML += `
    <div> ${name} ${precio} 
    <a><img id=${id} class="btnimagen" src="${imagen}" alt="imagen"></a>
    ${descripcion}</div>
    `;
  });
};
export default showData