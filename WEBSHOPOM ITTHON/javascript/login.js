
function tarolas(username,password){
  localStorage.setItem("Felhasználónév:",username);
  localStorage.setItem("Jelszó:",password)

  var storegeuser = localStorage.getItem("Felhasználónév:"); 
  var storegepass = localStorage.getItem("Jelszó:");

  if(username == storegeuser && password == storegepass){
    alert("Sikeres belépés!");
  }if(username != storegeuser && password != storegepass){
    alert("Hibás Felhasználó vagy hibás Jelszó");
  }
}