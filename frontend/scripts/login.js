const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPass");

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", searchUser);

const PORT = 3000;


async function searchUser(){
    //enviar un get para ver si el usuario existe
    const user = await fetch("http://example.com/movies.json",
        {method: "GET",
        mode: "cors"});
    
        
}

async function loginUser(){
    const user = await fetch(PORT+"/user/login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // Automatically converted to "username=example&password=password"
            body: new URLSearchParams({ email: inputEmail, password: inputPass }),
            mode: "cors"
        }
    );
    
    const userData = await user.json();
        
}






