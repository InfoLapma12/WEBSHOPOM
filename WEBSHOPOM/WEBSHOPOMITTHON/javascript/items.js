let product = [
    {
      id: 0,
      title: "Nike Air Force 1,07",
      price: 149.99,
      image: "../nikecipo/air force1.webp",
    },
    {
      id: 1,
      title: "Nike Air Force Retro",
      price: 119.99,
      image: "../nikecipo/airforce 1 reto.webp",
    },
    {
      id: 2,
      title: "Nike Dunk Low",
      price: 119.99,
      image: "../nikecipo/nike dunk low.webp",
    },
  ];
var cart = [];

function item(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){cart.push({...categories[a]});
displaycart();
}

function displaycart(a){
  let j = 0;
  if(cart.lengh == $0){
    document.getElementById('cartItem').innerHTML = "Yout cart is empty";
  } else {
    document.getElementById("cartItem").innerHTML = cart.map((items)=>
    {
      var {image,title,price} = items;
      return(
        `
        <div class='cart-item'
        <div clas='row-img'>
          <img class='rowing' src=${image}
          </div>
          <p style'font-size:12px;>${title}</p>
          <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
          "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"

      )
    }).join('');
  }
}