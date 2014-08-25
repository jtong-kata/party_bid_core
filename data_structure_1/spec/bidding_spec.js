
describe("Bidding", function() {


    beforeEach(function() {
        init_activity_database();
        var activities = JSON.parse(localStorage.activities);
        var two_activities = [{
            name: "first activity",
            sign_ups: [],
            bids: []
        }, {
            name: "second activity",
            sign_ups: [
                {
                    name:"仝键",
                    phone:"13600000000"
                },
                {
                    name:"于硕",
                    phone:"15600000000"
                },
                {
                    name:"吴京川",
                    phone:"13800000000"
                }
            ],
            bids: [
                {
                    name:"竞价1",
                    biddings : []
                }
            ]
        }];
        activities = two_activities;
        localStorage.activities = JSON.stringify(activities);
        localStorage.current_activity = "second activity";
        localStorage.current_bid = "竞价1";
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    });

    it("should bid successfully when it is bidding and user has signed up", function(){
        var phone_no = "13600000000";
        var sms_json = build_sms_json("JJ12", phone_no);
        localStorage.is_bidding = "true";
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities[1].bids.length).toBe(1);
        expect(activities[1].bids[0].biddings[0].name).toBe("仝键");
        expect(activities[1].bids[0].biddings[0].phone).toBe(phone_no);
        expect(activities[1].bids[0].biddings[0].price).toBe("12");
    });

    it("should bid failed when it is not on bidding", function(){
        var phone_no = "13600000000";
        var sms_json = build_sms_json("JJ12", phone_no);
        // false
        localStorage.is_bidding = "false";
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities[1].bids[0].biddings.length).toBe(0);
        // empty string
        localStorage.is_bidding = "";
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities[1].bids[0].biddings.length).toBe(0);
        // no attribute
        localStorage.removeItem("is_bidding");
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities[1].bids[0].biddings.length).toBe(0);
    });

    it("should bid failed when user didn't sign up", function(){
        var phone_no = "13600000001";
        var sms_json = build_sms_json("JJ12", phone_no);
        localStorage.is_bidding = "true";
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities[1].bids[0].biddings.length).toBe(0);
    });

    it("should accept bid once", function(){
        var phone_no = "13600000000";
        var sms_json = build_sms_json("JJ12", phone_no);
        localStorage.is_bidding = "true";
        notify_sms_received(sms_json);
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities[1].bids[0].biddings.length).toBe(1);
        expect(activities[1].bids[0].biddings[0].name).toBe("仝键");
        expect(activities[1].bids[0].biddings[0].phone).toBe(phone_no);
        expect(activities[1].bids[0].biddings[0].price).toBe("12");
    });



});