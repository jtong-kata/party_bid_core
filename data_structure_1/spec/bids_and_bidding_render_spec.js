
describe("Bids and Bidding Render", function() {


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
                    biddings : [
                        {
                            name: "仝键",
                            phone:"13600000000",
                            price: "12"

                        },
                        {
                            name: "于硕",
                            phone:"15600000000",
                            price: "10"
                        }
                    ]
                },
                {
                    name:"竞价2",
                    biddings : [
                        {
                            name: "仝键",
                            phone:"13600000000",
                            price: "10"


                        },
                        {
                            name: "于硕",
                            phone:"15600000000",
                            price: "12"
                        },
                        {
                            name: "吴京川",
                            phone:"13800000000",
                            price: "10"
                        }
                    ]
                }
            ]
        }];
        activities = two_activities;
        localStorage.activities = JSON.stringify(activities);
        localStorage.current_activity = "second activity";
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    });

    it("should show all bids", function(){
        var bids = transform_bids_to_view_model("second activity");

        expect(bids.length).toBe(2);
        expect(bids[0].name).toBe("竞价1");
        expect(bids[1].name).toBe("竞价2");
    });

    it("should show minimum not repeatable bidding", function(){
        var biddings = transform_biddings_to_view_model("second activity","竞价2");

        expect(biddings.length).toBe(1);
        expect(biddings[0].name).toBe("于硕");
        expect(biddings[0].phone).toBe("15600000000");
        expect(biddings[0].price).toBe("12");
    });


});