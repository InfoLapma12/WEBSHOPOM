document.getElementById("item1").addEventListener("click", function() {
    // Define an array of products
    var products = [
      { name: "Nike Air Force 1,07",
        image:"nikecipo/air force1.webp",
        price: 149.99
        }
    ];

    // Convert the array to a string and store it in local storage
    localStorage.setItem("products", JSON.stringify(products));
    alert("Nike Air Force 1,07 eltárolva");

    var storedProducts = JSON.parse(localStorage.getItem("products"));

    // Display the stored products on the screen
    var productList = document.getElementById("productList");
    productList.innerHTML = "";
    for (var i = 0; i < storedProducts.length; i++) {
      productList.innerHTML += "<p>" + storedProducts[i].name + " - $" + storedProducts[i].price + "</p>" ;
    }
});