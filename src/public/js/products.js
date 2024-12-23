const productos = (productos) => {
    const products = productos;
    const productsContainer = document.getElementById('products-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
        <h2>${product.nombre}</h2>
        <p>${product.precio}</p>
        <p>${product.img}</p>
        `;
        productsContainer.appendChild(productCard);
    });
}
export default productos;