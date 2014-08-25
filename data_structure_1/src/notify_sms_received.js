function notify_sms_received(sms){

    if(localStorage.is_signing_up != 'true') {
        return;
    }
    var message = sms.messages[0].message;
    if(message.substr(0, 2).toLowerCase() != 'bm') {
        return;
    }
    var name = message.substr(2).trim();
    var phone = sms.messages[0].phone;
    var activity = Activity.find_by_name(localStorage.current_activity);
    if(activity.check_sigh_up_repeat(phone)) {
        return;
    }
    activity.addSignUp(name, phone);
}