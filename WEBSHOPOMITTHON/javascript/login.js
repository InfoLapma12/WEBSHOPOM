
function tarolas(username,email,password) {
      localStorage.setItem(username, JSON.stringify({"Email":email,"Jelszó":password}))
      if (username == "" && email == "" && password == ""){
        swal("Ops..!", "Nincs kitöltve!");
        return false
      }else{
        swal("Sikeres regisztráció!");
        window.location.href = "bejel.html"
        return true
      } 

}

 // Bejelentkezés ellenőrzése Local Storage-ból
function tarolas2(username,password1){
        var userData = localStorage.getItem(username);
        if (userData === null) {
          alert("Nincs ilyen felhasználó!");
        }
        else if(userData.password === password1) {
            console.log("Hibás jelszó!");
        }else {
            console.log("Sikeres bejelentkezés!");
        }
    }