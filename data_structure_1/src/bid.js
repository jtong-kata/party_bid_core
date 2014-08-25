function create_new_bid (activity_name) {
    var activity = Activity.find_by_name(activity_name);
    activity.bids.push({name: '竞价' + (activity.bids.length + 1), biddings: []});
    activity.save();
}
