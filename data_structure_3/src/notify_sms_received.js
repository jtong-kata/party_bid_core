function notify_sms_received(sms){

    var message = sms.messages[0].message;
    var do_it = {
        bm: cope_sign_up,
        jj: cope_bidding
    }[message.substr(0, 2).toLowerCase()](sms);
}
