// producto
class Product {
  constructor(id, name, category, price, stock) {
    (this.id = id),
      (this.name = name),
      (this.category = category),
      (this.price = price),
      (this.stock = stock);
  }
}

// traigo la data de mi JSON
async function traerProductos() {
  const response = await fetch("./js/data.json");
  const productos = await response.json();
  console.log(productos);
}
traerProductos();

// Mostrar Productos
function mostrarProductosEnHTML(productos) {
  for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="col d-flex justify-content-center mb-4">
        <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem">
              <h5 class="card-title pt-2 text-center text-primary">
                  ${producto.name}
              </h5>
              <img src=${producto.img}  alt="">
              <img src="./img/caja.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text text-white">
                ${producto.material}
                </p>
                <h5 class="text-primary">
                  Precio: <span class="precio"> $ ${producto.price}</span>
                </h5>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary button">
                    Añadir a Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
                `;
    document.getElementById("productContainer").appendChild(contenedor);
  }
}
mostrarProductosEnHTML(productos);
