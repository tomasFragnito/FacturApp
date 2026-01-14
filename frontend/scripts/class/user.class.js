import { fetchBalance, deposit, withdraw } from "../wallet.js";
import { fetchName } from "../user.js";

export class User {
  constructor(){
    this.balance = User.getBalance();
    this.name = User.getName();
  }

  static saveToken(token) {
    localStorage.setItem("token", token);
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static clearToken() {
    localStorage.removeItem("token");
  }

  static saveBalance(balance) {
    localStorage.setItem("balance", balance.toString());
  }

  static getBalance() {
    return Number(localStorage.getItem("balance")) || "error";
  }

  static saveName(name) {
    localStorage.setItem("name", name);
  }

  static getName() {
    return localStorage.getItem("name") || "error";
  }

  static async fetchAndSaveName() {
    const name = await fetchName();
    User.saveName(name);
    return name;
  }

  // Wallet logic
  static async updateBalance() {
    const data = await fetchBalance();
    this.saveBalance(data.balance);
    return data.balance;
  }

  static async depositMoney(amount) {
    const data = await deposit(amount);
    this.saveBalance(data.balance);
    return data.balance;
  }

  static async withdrawMoney(amount) {
    const data = await withdraw(amount);
    this.saveBalance(data.balance);
    return data.balance;
  }
}
