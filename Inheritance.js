class user {
    constructor(usernmae) {
        this.usernmae = usernmae
    }

    getDetails() {
        console.log(`User Name is: ${this.usernmae}`);
    }        
}

class admin extends user {
    constructor(usernmae, email, password) {
        super(usernmae);
        this.email = email;
        this.password = password
    }

    addCourese() {
        console.log(`This course is added by ${this.usernmae}`);   
    }
}

const code = new admin("aman", "aman@gmail.com", "63452");
// code.getDetails();
// code.addCourese();


//? Static Properties

class user1 {
    constructor(usernmae) {
        this.usernmae = usernmae
    }
    logMe() {
        console.log(`Username is: ${this.usernmae}`);   
    }
    static createId() {
        return `1233`
    }
}

const kamlesh = new user1("kamlesh")
// console.log(kamlesh.createId());


class teacher extends user1{
    constructor(usernmae,email) {
        super(usernmae)
        this.email = email
    }
}
const iphone = new teacher("iphone", "iphone@gmail.com") 
iphone.logMe();