
let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name:"Nike Air Force 1,07",
        tag:"Shoes",
        price:149.99,
        inCart:0
    },
    {
        name:"Nike Air Force 1 Low Retro",
        tag:"Shoes",
        price:119.97,
        inCart:0
    },
    {
        name:"Nike Dunk Low",
        tag:"Shoes",
        price:119.99,
        inCart:0
    },
]
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadcartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if ( productNumbers ) {
        document.querySelector('span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if ( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productInCarts');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    console.log("my cartcost,",cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalcost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
}
function displayCart(){
    let cartItems = localStorage.setItem(productsInCart);
    cartItems = JSON.parse(cartItems);
    let productConatiner = document.querySelector("products-conatainer");
    
    if(cartItems && productConatiner ){
        productConatiner.innerHTML = '';
        Object.values(cartItems).map(item => {
            productConatiner.innerHTML += `
            <div class=""product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="./nikecipo/${item.tag}.jpg">
                <span  ${item.name}></span>
            </div>
            `
        });

    }
}

onLoadcartNumbers();
displayCart();