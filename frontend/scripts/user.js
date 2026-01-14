import PORT_APP from "./globalConst.js";
import { User } from "./class/user.class.js";

function authHeaders() {
  return {
    "Authorization": "Bearer " + User.getToken(),
    "Content-Type": "application/json"
  };
}

export async function fetchName() {
    const res = await fetch(
      "http://localhost:"+PORT_APP+"/user/name",
      { method: "GET", headers: authHeaders() }
    );

    if (!res.ok) throw new Error("Error HTTP " + res.status);
    
    const data = await res.json();
    return data.name;
}