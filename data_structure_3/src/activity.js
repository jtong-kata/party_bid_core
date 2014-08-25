function Activity (name) {
    this.name = name;
}

Activity.prototype.create = function () {
    var activities = Activity.all();
    this.id = activities.length.toString();
    activities.push(this);
    localStorage.activities = JSON.stringify(activities);
    localStorage.current_activity = this.id;
    localStorage.activity_id_generator = activities.length;
};

Activity.all = function () {
    var activities;
    try {
        activities = JSON.parse(localStorage.getItem('activities'));
    }
    catch (e) {
        activities = [];
    }
    return activities;
};
