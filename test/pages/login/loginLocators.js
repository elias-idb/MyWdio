class Login{
    get profileIcon(){
       // return $("//a[@href='/account/login']");
        //return $("//a[@href='/account']");
        return $("//a[contains(@href,'/account')]");
    }

    get loginEmailInput(){
        return $("//input[@name='email']");
    }

    get loginPasswordInput(){
        return $("//input[@name='password']");
    }

    get buttonSignup(){
        return $("//button[@type='submit']");
    }

    get logutLink() {
        return $("//a[contains(text(),'Logout')]");
    }
}

module.exports = new Login();