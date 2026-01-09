import { User } from "./class/user.class.js";

const inputMoney = document.getElementById("moneyUserAgregate");
const btnAdd = document.getElementById("btnMoneyUserAgregate");
const btnWithdraw = document.getElementById("btnMoneyUserWithdraw");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const moneyUser = document.getElementById("moneyUser");
    console.log(moneyUser)

    if (!moneyUser) return;
    
    const balance = await User.updateBalance();
    moneyUser.textContent = balance;
  } catch (e) {
    console.error(e);
  }
});

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

btnWithdraw.addEventListener("click", async () => {
  const amount = Number(inputMoney.value);
  if (amount <= 0) return;

  try {
    const balance = await User.withdrawMoney(amount);
    moneyUser.textContent = balance;
    inputMoney.value = "";
  } catch (e) {
    console.error(e);
  }
});
