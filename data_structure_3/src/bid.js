function cope_bidding() {

}

function create_new_bid () {
    var bids = JSON.parse(localStorage.bids) || [];
    bids.push({name: '竞价' + (bids.length + 1), activity_id: localStorage.current_activity, biddings: []});
    localStorage.bids = JSON.stringify(bids);
}
