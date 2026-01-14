import { User } from "./class/user.class.js";

const btnAdd = document.getElementById("btnMoneyUserAgregate");
const inputMoney = document.getElementById("InputmoneyUser");

btnAdd.addEventListener("click", async () => {
  const amount = Number(inputMoney.value);
  if (amount <= 0) return;

  try {
    const balance = await User.depositMoney(amount);
    moneyUser.textContent = balance;
    inputMoney.value = "";
  } catch (e) {
    console.error(e);
  }
});