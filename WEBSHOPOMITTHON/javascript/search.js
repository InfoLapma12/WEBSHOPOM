const submit_button = document.querySelector("#login-btn");
submit_button.onclick = () => {
    console.log(submit_button)
    
    const uname = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const passw = document.getElementById("password").value;

    localStorage.setItem("Felhasználónév",uname);
    localStorage.setItem("Email",email);
    localStorage.setItem("Jelszó",passw);

    if(uname == "" || email == "" || passw == ""){
        swal("Oops!", "Valamit elrontottál", "error");    
    }else{
        swal("Szép munka!", "Sikeres regisztrálás!", "success");  
    }

}
const login_button = document.querySelector("#login-btn");
login_button.onclick = () => {

    const user = document.getElementById("username1").value;
    const pass2 = document.getElementById("password1").value;
    const felhasz = document.getAnimations("regiszt-name").value;

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
