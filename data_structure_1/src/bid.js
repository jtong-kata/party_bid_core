function create_new_bid (activity_name) {
    var activity = Activity.find_by_name(activity_name);
    activity.bids.push({name: '竞价' + (activity.bids.length + 1), biddings: []});
    activity.save();
}

function cope_bidding(sms) {
    if(localStorage.is_bidding != 'true') {
        return;
    }
    var price = sms.messages[0].message.substr(2);
    var phone = sms.messages[0].phone;
    var activity = Activity.find_by_name(localStorage.current_activity);
    if(!activity.check_sigh_up(phone)) {
        return;
    }
    if(activity.check_bidding(phone)) {
        return;
    }
    activity.addBidding(price, phone);
}
