import { User } from "./class/user.class.js";

const btnWithdraw = document.getElementById("btnMoneyUserWithdraw");
const inputMoney = document.getElementById("InputmoneyUser");

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
