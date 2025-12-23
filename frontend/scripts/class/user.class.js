export class User{
    constructor(name, mail, password){
        this.name = name;
        this.mail = mail;
        this.password = password;
    }

    getLogin(){
        //mandar un get al back para el ingreso
    }

    postCreateUser(){
        //crear user
    }

    getLocalStorage(){
        const ls = localStorage.getItem("user");

        if (!ls) {
            return null;
        } else {
            return JSON.parse(ls);
        } 
    }

    setLocalStorage(){
        localStorage.setItem("user", JSON.stringify(this.name,this.mail,this.password));   
    }
}