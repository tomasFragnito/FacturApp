const inputName = document.getElementById("inputName");
const inputPass = document.getElementById("inputPass");

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", searchUser);


async function searchUser(){
    //enviar un get para ver si el usuario existe
    const user = await fetch("http://example.com/movies.json",
        {method: "GET",
        mode: "cors"});
    
        
}





