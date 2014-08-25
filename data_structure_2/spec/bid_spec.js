
describe("Bid", function() {


    beforeEach(function() {
        init_activity_database();
        var activities = JSON.parse(localStorage.activities);
        var activity = {
            name: "first activity",
            sign_ups: [],
            bids: [],
            biddings: {}
        };
        activities["0"] = activity;
        localStorage.activities = JSON.stringify(activities);
        localStorage.current_activity_id = "0";
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    });

    it("should create new bid", function(){
        create_new_bid("0");

        var activities = JSON.parse(localStorage.activities);
        expect(activities["0"].bids.length).toBe(1);
        expect(JSON.stringify(activities["0"].biddings["竞价1"])).toBe("[]");
    });



});