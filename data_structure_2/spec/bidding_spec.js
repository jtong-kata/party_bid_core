
describe("Bidding", function() {


    beforeEach(function() {
        init_activity_database();
        var two_activities = [{
            name: "first activity",
            sign_ups: [],
            bids: [],
            biddings:{}
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
            bids:["竞价1"],
            biddings: {
                "竞价1": []
                }
        }];
        localStorage.activities = JSON.stringify(two_activities);
        localStorage.current_activity_id = "1";
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
        expect(activities["1"].biddings["竞价1"].length).toBe(1);

        expect(activities["1"].biddings["竞价1"][0].phone).toBe(phone_no);
        expect(activities["1"].biddings["竞价1"][0].price).toBe("12");
    });

    it("should bid failed when it is not on bidding", function(){
        var phone_no = "13600000000";
        var sms_json = build_sms_json("JJ12", phone_no);
        // false
        localStorage.is_bidding = "false";
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities["1"].biddings["竞价1"].length).toBe(0);
        // empty string
        localStorage.is_bidding = "";
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities["1"].biddings["竞价1"].length).toBe(0);
        // no attribute
        localStorage.removeItem("is_bidding");
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities["1"].biddings["竞价1"].length).toBe(0);
    });

    it("should bid failed when user didn't sign up", function(){
        var phone_no = "13600000001";
        var sms_json = build_sms_json("JJ12", phone_no);
        localStorage.is_bidding = "true";
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities["1"].biddings["竞价1"].length).toBe(0);
    });

    it("should accept bid once", function(){
        var phone_no = "13600000000";
        var sms_json = build_sms_json("JJ12", phone_no);
        localStorage.is_bidding = "true";
        notify_sms_received(sms_json);
        notify_sms_received(sms_json);

        var activities = JSON.parse(localStorage.activities);
        expect(activities["1"].biddings["竞价1"].length).toBe(1);

        expect(activities["1"].biddings["竞价1"][0].phone).toBe(phone_no);
        expect(activities["1"].biddings["竞价1"][0].price).toBe("12");
    });



});