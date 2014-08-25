function render_bids (activity_id) {
    var bids = JSON.parse(localStorage.bids) || [];
    return _(bids).where({activity_id: activity_id}).value();
}

function render_biddings (activity_id, bid) {
    var bids = JSON.parse(localStorage.bids) || [];
    var biddings = _(bids).where({activity_id: activity_id, name: bid}).value()[0].biddings;
    var result = _.chain(biddings)
        .groupBy(function (bidding) {
            return bidding.price;
        })
        .find(function (list) {
            return list.length == 1;
        })
        .value();

    return [_(result[0]).assign({name: SignUp.find_name(activity_id, result[0].phone)}).value()];
}