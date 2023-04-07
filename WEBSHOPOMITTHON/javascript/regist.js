const submit_button = document.querySelector("#login-btn");
submit_button.onclick = () => {
    
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
