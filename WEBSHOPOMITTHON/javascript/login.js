

function tarolas(username,email,password) { 
      localStorage.setItem(username,JSON.stringify({"Email":email,"Jelszó":password}))
      alert("Sikeres regisztráció!" + username ,'/n');
}
 // Bejelentkezés ellenőrzése Local Storage-ból
function tarolas2(username,password){
      var userData = localStorage.getItem(username);
      if (userData === null) {
          alert("Nincs ilyen felhasználó!");
      } 
      userData = JSON.parse(userData);
      if (userData.password !== password || userData.username != username) {
          alert("Hibás jelszó / vagy felhasználónév!");

      }
      else {
          userData = JSON.parse(userData);
          if (userData.password !== password) {
              console.log("Hibás jelszó!");
          } else {
              console.log("Sikeres bejelentkezés!");
          }
      }
}