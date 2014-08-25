function notify_sms_received(sms){

    var message = sms.messages[0].message;
    var do_it = {
        bm: cope_sign_up,
        jj: cope_bidding
    }[message.substr(0, 2).toLowerCase()](sms);
}

function cope_sign_up(sms) {
    if(localStorage.is_signing_up != 'true') {
        return;
    }
    var name = sms.messages[0].message.substr(2).trim();
    var phone = sms.messages[0].phone;
    var activity = Activity.find_by_name(localStorage.current_activity);
    if(activity.check_sigh_up_repeat(phone)) {
        return;
    }
    activity.addSignUp(name, phone);
}

function cope_bidding(sms) {
    if(localStorage.is_bidding != 'true') {
        return;
    }
    var price = sms.messages[0].message.substr(2);
    var phone = sms.messages[0].phone;
    var activity = Activity.find_by_name(localStorage.current_activity);
    activity.addBidding(price, phone);
}