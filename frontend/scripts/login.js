import { User } from "./class/user.class.js";
import PORT_APP from "./globalConst.js";

const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPass");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", loginUser);

async function loginUser() {
  const res = await fetch(`http://localhost:${PORT_APP}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: inputEmail.value,
      password: inputPass.value
    })
  });

  if (!res.ok) {
    console.error("Credenciales inválidas");
    return;
  }

  const { token } = await res.json();
  User.saveToken(token);

  window.location.href = "./index.html";
}
