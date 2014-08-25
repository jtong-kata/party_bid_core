function transform_bids_to_view_model (activity_name) {
    return Activity.find_by_name(activity_name).bids;
}

function transform_biddings_to_view_model (activity_name, bid_name) {
    var biddings = _(Activity.find_by_name(activity_name).bids).findWhere({name: bid_name}).biddings;
    return _.chain(biddings)
        .groupBy(function (bidding) {
            return bidding.price;
        })
        .find(function (list) {
            return list.length == 1;
        })
        .value();
}
