function create_new_bid (activity_id) {
    var activity = Activity.find_by_id(activity_id);
    activity.bids.push('竞价' + (activity.bids.length + 1));
    activity.biddings['竞价' + (activity.bids.length)] = [];
    activity.save();
}

function cope_bidding(sms) {
    if(localStorage.is_bidding != 'true') {
        return;
    }
    var price = sms.messages[0].message.substr(2);
    var phone = sms.messages[0].phone;
    var activity = Activity.find_by_id(localStorage.current_activity_id);
    if(!activity.check_sigh_up(phone)) {
        return;
    }
    if(activity.check_bidding(phone)) {
        return;
    }
    activity.addBidding(price, phone);
}
