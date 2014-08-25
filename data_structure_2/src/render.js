function transform_bids_to_view_model (activity_id) {
    return _(Activity.find_by_id(activity_id).bids)
        .map(function (name) {
            return {name: name};
        }).value();
}
