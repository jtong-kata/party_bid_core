'use strict';

function Activity (name, sign_ups, bids, biddings) {
    this.name = name;
    this.sign_ups = sign_ups || [];
    this.bids = bids || [];
    this.biddings = biddings || {};
}

Activity.prototype.create = function () {
    var activities = Activity.all();
    var ids = Activity.ids();
    var index = ids.length;
    activities[index] = this;
    ids.push(index.toString());
    localStorage.activities = JSON.stringify(activities);
    localStorage.activity_ids = JSON.stringify(ids);
    localStorage.current_activity = index;
    localStorage.current_activity_id = index;
    localStorage.activity_id_generator = index + 1;
};

Activity.prototype.save = function () {
    var activities = Activity.all();
    var activity = _(activities).find({name: this.name});
    activity.sign_ups = this.sign_ups;
    //activity.bids = this.bids;
    localStorage.activities = JSON.stringify(activities);
};

Activity.prototype.addSignUp = function (name, phone) {
    this.sign_ups.push({name: name, phone: phone});
    this.save();
};

Activity.prototype.addBidding = function () {

};

Activity.all = function () {
    return JSON.parse(localStorage.getItem('activities')) || {};
};

Activity.ids = function () {
    return JSON.parse(localStorage.getItem('activity_ids')) || [];
};

Activity.find_by_id = function (id) {
    var activity = Activity.all()[id];
    return new Activity(activity.name, activity.sign_ups, activity.bids);
};
