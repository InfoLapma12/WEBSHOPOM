var termek1 = [ 
    image = "nikecipo/air force1.webp",
    names = "Nike Air Force 1,07",
    price =  149.99
]

function addToCart(termek1){
  localStorage.setItem(names, JSON.stringify({"Kép":image,"Ár":price}))
}
function clearCartItems(){
  localStorage.clear()
}