function cope_bidding(sms) {
    if(localStorage.is_bidding != 'true') {
        return;
    }
    var price = sms.messages[0].message.substr(2);
    var phone = sms.messages[0].phone;
    var activity = Activity.find_by_id(localStorage.current_activity);
    if(!SignUp.check(phone)) {
        return;
    }
    if(Bidding.check(phone)) {
        return;
    }
    var bidding = new Bidding(price, phone, SignUp.find_name(activity.id, phone));
    bidding.create();
}

function create_new_bid (id) {
    var bids = JSON.parse(localStorage.bids) || [];
    bids.push({name: '竞价' + (bids.length + 1), activity_id: id, biddings: []});
    localStorage.bids = JSON.stringify(bids);
}

function Bidding (price, phone, name) {
    this.price = price;
    this.phone = phone;
    this.name = name;
}

Bidding.prototype.create = function () {
    var activity_id = localStorage.current_activity;
    var bids = JSON.parse(localStorage.bids) || [];
    var biddings = _(bids).find({name: localStorage.current_bid, activity_id: activity_id}).biddings;
    biddings.push(this);
    localStorage.bids = JSON.stringify(bids);
};

Bidding.check = function (phone) {
    var activity_id = localStorage.current_activity;
    var bids = JSON.parse(localStorage.bids) || [];
    var biddings = _(bids).find({name: localStorage.current_bid, activity_id: activity_id}).biddings;
    return !!_(biddings).find({phone: phone});
};
