const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPass");

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", loginUser);


const PORT = 3000;


async function searchUser(){
    //enviar un get para ver si el usuario existe
    const user = await fetch("http://example.com/movies.json",
        {method: "GET",
        mode: "cors"});
    
        
}

async function loginUser(){
    console.log(inputEmail.value + inputPass.value)
    const res = await fetch("http://localhost:"+PORT+"/users/login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: inputEmail.value, password: inputPass.value }),
            mode: "cors"
        }
    );
    console.log(res.status)
    console.log(res.body)
    if (!res.ok) {
        console.error("Credenciales inválidas");
        return;
    }

    console.log("Login OK");
    window.location.href = "/frontend/screen/index.html";
        
}






