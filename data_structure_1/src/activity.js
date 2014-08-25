'use strict';

function Activity (name, sign_ups, bids) {
    this.name = name;
    this.sign_ups = sign_ups || [];
    this.bids = bids || [];
}

Activity.prototype.create = function () {
    var activities = Activity.all();
    activities.push(this);
    localStorage.activities = JSON.stringify(activities);
};

Activity.prototype.active = function () {
    localStorage.current_activity = this.name;
};

Activity.prototype.save = function () {
    var activities = Activity.all();
    var activity = _(activities).findWhere({name: this.name});
    activity.sign_ups = this.sign_ups;
    activity.bids = this.bids;
    localStorage.activities = JSON.stringify(activities);
};

Activity.prototype.addSignUp = function (name, phone) {
    this.sign_ups.push({name: name, phone: phone});
    this.save();
};

Activity.prototype.check_sigh_up_repeat = function (phone) {
    return !!(_(this.sign_ups).findWhere({phone: phone}));
};

Activity.prototype.addBidding = function (price, phone) {
    this.bids[this.bids.length - 1].biddings.push({name: this.find_name(phone), phone: phone, price: price});
    this.save();
};

Activity.prototype.find_name = function (phone) {
    return (_(this.sign_ups).findWhere({phone: phone})).name;
};

Activity.all = function () {
    return JSON.parse(localStorage.activities) || [];
};

Activity.find_by_name = function (activity_name) {
    var activity = _(Activity.all()).findWhere({name: activity_name});
    return new Activity(activity.name, activity.sign_ups, activity.bids);
};
