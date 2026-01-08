import PORT_APP from "../globalConst.js";

export class User{
    constructor(balance = 0){
        this.balance = balance;
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
        const balance = localStorage.getItem("balance");
        return balance ? Number(balance) : 0;
    }
    
}