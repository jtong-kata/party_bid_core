function transform_bids_to_view_model (activity_id) {
    return _(Activity.find_by_id(activity_id).bids)
        .map(function (name) {
            return {name: name};
        }).value();
}

function transform_biddings_to_view_model (activity_id, bid_name) {
    var biddings = Activity.find_by_id(activity_id).biddings[bid_name];
    return _.chain(biddings)
        .groupBy(function (bidding) {
            return bidding.price;
        })
        .find(function (list) {
            return list.length == 1;
        })
        .each(function (bidding) {
            bidding.name = Activity.find_by_id(activity_id).find_name(bidding.phone);
        })
        .value();
}

function render_sign_ups(activity_name) {
    return Activity.find_by_name(activity_name).sign_ups;
}
