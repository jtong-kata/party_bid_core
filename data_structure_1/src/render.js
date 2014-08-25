function transform_bids_to_view_model (activity_name) {
    return Activity.find_by_name(activity_name).bids;
}
