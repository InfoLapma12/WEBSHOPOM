
var x = 0;
document.getElementById("c").innerText = x;

function airforce(val,price){
  document.getElementById("hello").innerHTML +=  "<br><li>"+ val + "<input type='button' value='X' onclick='remove()' class='cart-remove' ><br>" + price + "EUR" + "</li>"  ;
  x = x + 1;
  document.getElementById("c").innerHTML = x;
  if (x >= 5){ 
    alert("A kosár megtelt")
  }
}
function remove(){

  var listItem = document.getElementsByTagName("li");
  for(var i = 0; i < listItem.length; i++){
    listItem[i].onclick = function(){
      this.parentNode.removeChild(this);
    }
  }
  x = x - 1;
  document.getElementById("c").innerText = x;
}
