const productElements = document.getElementsByClassName("product");
const cartProductsDiv  = document.querySelector(".cart__products");
const quantityDecElements = document.getElementsByClassName("product__quantity-control_dec");
const quantityIncElements = document.getElementsByClassName("product__quantity-control_inc");
const productAddElements = document.getElementsByClassName("product__add");

function doQuantityDecClick() {
  const quantityValueElement = this.closest("div.product__quantity-controls").querySelector("div.product__quantity-value");
  let quantity = + quantityValueElement.textContent;
  quantity--;
  if (quantity >= 1) {
    quantityValueElement.textContent = quantity;
  }
}

function doQuantityIncClick() {
  const quantityValueElement = this.closest("div.product__quantity-controls").querySelector("div.product__quantity-value");
  let quantity = + quantityValueElement.textContent;
  quantity++;
  quantityValueElement.textContent = quantity;
}

function addProduct() {
  const product = this.closest("div.product");
  const productId = product.dataset.id;
  const productQuantity = + product.querySelector("div.product__quantity-value").textContent;
  let needToAdd = true;
  const cartProducts = document.getElementsByClassName("cart__product");
  for (cartProduct of cartProducts) {
    if (cartProduct.dataset.id == productId) {
      cartProduct.querySelector("div.cart__product-count").textContent = + cartProduct.textContent + productQuantity;
      needToAdd = false;
    }
  }

  if (needToAdd) {
    const productImage = product.querySelector("img").src;
    let cartProduct = document.createElement("div");
    cartProduct.classList.add("cart__product");
    cartProduct.dataset.id = productId;
    let img = document.createElement("img");
    img.classList.add("cart__product-image");
    img.src = productImage;
    let quantityDiv = document.createElement("div");
    quantityDiv.classList.add("cart__product-count");
    quantityDiv.textContent = productQuantity;
    cartProduct.appendChild(img);
    cartProduct.appendChild(quantityDiv);
    cartProductsDiv.appendChild(cartProduct);
  }
}

for (quantityDecElement of quantityDecElements) {
  quantityDecElement.addEventListener("click", doQuantityDecClick);
}

for (quantityIncElement of quantityIncElements) {
  quantityIncElement.addEventListener("click", doQuantityIncClick);
}

for (productAddElement of productAddElements) {
  productAddElement.addEventListener("click", addProduct);
}
