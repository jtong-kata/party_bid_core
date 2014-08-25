
describe("Bid", function() {


    beforeEach(function() {
        init_activity_database();
        init_two_activity();
        init_sign_ups();
        localStorage.current_activity = "1";
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    });

    it("should create new bid", function(){
        create_new_bid("1");

        var bids = JSON.parse(localStorage.bids);
        expect(bids.length).toBe(1);
        expect(JSON.stringify(bids[0].biddings)).toBe("[]");
    });



});