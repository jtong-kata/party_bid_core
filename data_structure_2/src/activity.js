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
    ids.push(index);
    localStorage.activities = JSON.stringify(activities);
    localStorage.activity_ids = JSON.stringify(ids);
    localStorage.current_activity = index;
};

Activity.all = function () {
    return JSON.parse(localStorage.getItem('activities')) || {};
};

Activity.ids = function () {
    return JSON.parse(localStorage.getItem('activity_ids')) || [];
};
