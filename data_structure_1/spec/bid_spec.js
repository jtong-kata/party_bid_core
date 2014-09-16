
describe("Bid", function() {


    beforeEach(function() {
        init_activity_database();
        var activities = JSON.parse(localStorage.activities);
        var activity = {
            name: "first activity",
            sign_ups: [],
            bids: []
        };
        activities.push(activity);
        localStorage.activities = JSON.stringify(activities);
        localStorage.current_activity = "first activity";
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    });

    it("should create new bid", function(){
        create_new_bid("first activity");

        var activities = JSON.parse(localStorage.activities);
        expect(activities[0].bids.length).toBe(1);
        expect(activities[0].bids[0].name).toBe("竞价1");
        expect(activities[0].bids[0].biddings.length).toBe(0);
    });





});