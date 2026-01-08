import PORT_APP from "./globalConst.js";
import { User } from "./class/user.class.js";

//btnMoneyUserAgregate.addEventListener("click", transferAmount);

function authHeaders() {
  return {
    "Authorization": "Bearer " + User.getToken(),
    "Content-Type": "application/json"
  };
}

export async function getBalance() {
  const res = await fetch(
    `http://localhost:${PORT_APP}/wallet/updateBalance`,
    {
      method: "GET",
      headers: authHeaders()
    }
  );

  if (!res.ok) {
    throw new Error("Error HTTP " + res.status);
  }

  return await res.json();
}

async function transferAmount(){
    const user = await fetch("http://localhost:"+PORT_APP+"/transfer/"+moneyUserAgregate.value, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: inputEmail.value
        }),
    });
        
}
