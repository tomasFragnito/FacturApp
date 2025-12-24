const inputName = document.getElementById("inputName").value;
const inputEmail = document.getElementById("inputEmail").value;
const inputPass = document.getElementById("inputPass").value;

const btnSign = document.getElementById("btnSign");

btnSign.addEventListener("click", registerUser);

const PORT = 3000;

console.log(inputName,inputEmail,inputPass);

async function registerUser(){
    const user = await fetch("http://localhost:"+PORT+"/users/sign", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: inputName,
            email: inputEmail,
            password: inputPass,
        }),
    });
    
        
}






