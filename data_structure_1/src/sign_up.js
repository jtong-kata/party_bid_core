function cope_sign_up(sms) {
    if(localStorage.is_signing_up != 'true') {
        return;
    }
    var name = sms.messages[0].message.substr(2).trim();
    var phone = sms.messages[0].phone;
    var activity = Activity.find_by_name(localStorage.current_activity);
    if(activity.check_sigh_up(phone)) {
        return;
    }
    activity.addSignUp(name, phone);
}