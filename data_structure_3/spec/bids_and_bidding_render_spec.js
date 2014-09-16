
describe("Bids and Bidding Render", function() {


    beforeEach(function() {
        init_activity_database();
        init_two_activity();
        init_sign_ups();
        var bids = [
            {
                name: "竞价1",
                activity_id:"0",
                biddings:[
                    {
                        phone:"13600000000",
                        price: "9"

                    },
                    {
                        phone:"15600000000",
                        price: "10"
                    }
                ]
            },
            {
                name: "竞价1",
                activity_id:"1",
                biddings:[
                    {
                        phone:"13600000000",
                        price: "12"

                    },
                    {
                        phone:"15600000000",
                        price: "10"
                    }
                ]

            },
            {
                name: "竞价2",
                activity_id:"1",
                biddings:[
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
        ];
        localStorage.bids = JSON.stringify(bids);
        localStorage.current_activity = "1";
        localStorage.is_bidding = "";
    });

    afterEach(function(){
        localStorage.clear();
    });

    it("should show all bids", function(){
        var bids = render_bids("1");

        expect(bids.length).toBe(2);
        expect(bids[0].name).toBe("竞价1");
        expect(bids[1].name).toBe("竞价2");
    });

    it("should show minimum not repeatable bidding", function(){
        var biddings = render_biddings("1","竞价2");

        expect(biddings.length).toBe(1);
        expect(biddings[0].name).toBe("于");
        expect(biddings[0].phone).toBe("15600000000");
        expect(biddings[0].price).toBe("12");
    });


});