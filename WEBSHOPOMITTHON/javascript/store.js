const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Kosár lista
const cartItems = [];

// Összesen mező
const totalPrice = document.querySelector('.total-price');

// Termék hozzáadása a kosárhoz
function addToCart(productName, productPrice) {
  const item = {
    name: productName,
    price: productPrice
  };

  cartItems.push(item);

  // Kosár lista frissítése
  updateCart();
}

// Kosár lista frissítése
function updateCart() {
  const cartList = document.querySelector('.cart-items');
  let cartHTML = '';

  for (let i = 0; i < cartItems.length; i++) {
    cartHTML += `<li>${cartItems[i].name} - ${cartItems[i].price} Ft</li>`;
  }

  cartList.innerHTML = cartHTML;

  // Összesen mező frissítése
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }

  totalPrice.innerText = `Összesen: ${total.toFixed(2)} Ft`;
}

// Minden Kosárba gombra kattintás
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    const productName = this.parentNode.querySelector('h3').innerText;
    const productPrice = parseFloat(this.parentNode.querySelector('.price').innerText);

    addToCart(productName, productPrice);
  });
}
