import PORT_APP from "./globalConst.js";
import { User } from "./class/user.class.js";

function authHeaders() {
  return {
    "Authorization": "Bearer " + User.getToken(),
    "Content-Type": "application/json"
  };
}

export async function fetchBalance() {
  const res = await fetch(
    "http://localhost:"+PORT_APP+"/wallet/balance",
    { method: "GET", headers: authHeaders() }
  );

  if (!res.ok) throw new Error("Error HTTP " + res.status);
  return res.json();
}

export async function deposit(amount) {
  const res = await fetch(
    "http://localhost:"+PORT_APP+"/wallet/deposit",
    {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ amount })
    }
  );

  if (!res.ok) throw new Error("Error HTTP " + res.status);
  return res.json();
}

export async function withdraw(amount) {
  const res = await fetch(
    "http://localhost:"+PORT_APP+"/wallet/withdraw",
    {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ amount })
    }
  );

  if (!res.ok) throw new Error("Error HTTP " + res.status);
  return res.json();
}
