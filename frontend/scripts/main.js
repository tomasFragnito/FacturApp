import { User } from "./class/user.class.js";
import { getBalance } from "./wallet.js";

const moneyUser = document.getElementById("moneyUser");

document.addEventListener("DOMContentLoaded", async () => {
  if (!User.getToken()) {
    window.location.href = "./login.html";
    return;
  }

  try {
    const data = await getBalance();
    moneyUser.textContent = data.balance;
  } catch (err) {
    console.error(err);
  }
});
