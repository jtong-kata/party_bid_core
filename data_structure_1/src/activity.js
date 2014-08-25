

function Activity (name) {
    this.name = name;
    this.sign_ups = [];
    this.bids = [];
}

Activity.prototype.create = function () {
    var activities = Activity.all();
    activities.push(this);
    localStorage.setItem('activities', JSON.stringify(activities));
};

Activity.prototype.active = function () {
    localStorage.setItem('current_activity', this.name);
};

Activity.all = function () {
    return JSON.parse(localStorage.getItem('activities')) || [];
};
