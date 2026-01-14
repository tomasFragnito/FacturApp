import { User } from "./class/user.class.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {

    await User.fetchAndSaveName();
    const user = new User();
    
    const moneyUser = document.getElementById("moneyUser");
    console.log(moneyUser);

    const nameUser = document.getElementById("nameUser");

    if (!moneyUser) return;
    
    const balance = await User.updateBalance();
    moneyUser.textContent = balance;

    nameUser.textContent = user.name;
    console.log("nombre"+user.name);

    console.log(balance)
  } catch (e) {
    console.error(e);
  }
});


