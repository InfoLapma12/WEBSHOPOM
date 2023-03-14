const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");
const clearCart = document.getElementById("clear-cart");

let cartItems = [];

function addToCart(name, price, image) {
  const item = { name, price, image };
  cartItems.push(item);
  renderCart();
  localStorage.setItem("Termék neve:",name);
  localStorage.setItem("Termék ára:",price);
  localStorage.setItem("Termék képe:",image)
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(item => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = item.image;
    li.appendChild(img);
    const spanName = document.createElement("span");
    spanName.innerHTML = item.name;
    li.appendChild(spanName);
    const spanPrice = document.createElement("span");
    spanPrice.innerHTML = item.price + " Ft";
    li.appendChild(spanPrice);
    cartList.appendChild(li);
    total += item.price;
  });
  totalPrice.innerHTML = "Összesen: " + total + " Ft";
}

function clearCartItems() {
  cartItems = [];
  renderCart();
}

clearCart.addEventListener("click", clearCartItems);
