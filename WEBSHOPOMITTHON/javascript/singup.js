const login_button = document.querySelector("#bejel-btn");
login_button.onmousedown = () => {

    const user = document.getElementById("username1").value;
    const pass2 = document.getElementById("password1").value;

    const username = localStorage.getItem("Felhasználónév");
    const password = localStorage.getItem("Jelszó");
    
    if(user == "" || pass2 == ""){
        swal("Oops!", "Valamit elrontottál", "error");    
    }else{
        if(user === username && pass2 == password){
            swal("Szép munka!", "Sikeres bejelenkezés!", "success"); 
        }else{
            swal("Oops!", "Valamit elrontottál", "error");
        }
    }
}
