
describe("Bids and Bidding Render", function() {


    beforeEach(function() {
        init_activity_database();
        var two_activities = {
            "0":{
                name: "first activity",
                sign_ups:[],
                bids:[],
                biddings:{}
            },
            "1": {
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
                bids:["竞价1","竞价2"],
                biddings:{
                    "竞价1":[
                        {
                            phone:"13600000000",
                            price: "12"

                        },
                        {
                            phone:"15600000000",
                            price: "10"
                        }
                    ],
                    "竞价2": [
                        {
                            phone:"13600000000",
                            price: "10"

                        },
                        {
                            phone:"15600000000",
                            price: "12"
                        },
                        {
                            phone:"13800000000",
                            price: "10"
                        }
                    ]
                }
            }
        };
        var activity_ids = ["0", "1"];
        localStorage.activities = JSON.stringify(two_activities);
        localStorage.activity_ids = JSON.stringify(activity_ids);
        localStorage.current_activity_id = "1";
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    });

    it("should show all bids", function(){
        var bids = transform_bids_to_view_model("1");

        expect(bids.length).toBe(2);
        expect(bids[0].name).toBe("竞价1");
        expect(bids[1].name).toBe("竞价2");
    });

    it("should show minimum not repeatable bidding", function(){
        var biddings = transform_biddings_to_view_model("1","竞价2");

        expect(biddings.length).toBe(1);
        expect(biddings[0].name).toBe("于硕");
        expect(biddings[0].phone).toBe("15600000000");
        expect(biddings[0].price).toBe("12");
    });


});