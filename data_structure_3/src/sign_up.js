function cope_sign_up(sms) {
//    if(localStorage.is_signing_up != 'true') {
//        return;
//    }
    var name = sms.messages[0].message.substr(2).trim();
    var phone = sms.messages[0].phone;
    if(SignUp.check(phone)) {
        return;
    }
    var signUp = new SignUp(name, phone);
    signUp.create();
}

function SignUp (name, phone) {
    this.name = name;
    this.phone = phone;
}

SignUp.prototype.create = function () {
    var signUps = SignUp.all();
    this.activity_id = localStorage.current_activity;
    signUps.push(this);
    localStorage.sign_ups = JSON.stringify(signUps);
};

SignUp.all = function () {
    var signUps;
    try {
        signUps = JSON.parse(localStorage.getItem('sign_ups'));
    }
    catch (e) {
        signUps = [];
    }
    return signUps;
};

SignUp.check = function (phone) {
    return !!_(SignUp.all()).find({phone: phone});
};
