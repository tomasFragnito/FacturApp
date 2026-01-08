import PORT_APP from "./globalConst.js";

const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPass");

const btnSign = document.getElementById("btnSign");

btnSign.addEventListener("click", registerUser);

console.log(inputName.value,inputEmail.value,inputPass.value);

async function registerUser(){
    const user = await fetch("http://localhost:"+PORT_APP+"/user/sign", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: inputName.value,
            email: inputEmail.value,
            password: inputPass.value,
        }),
    });
    
        
}






