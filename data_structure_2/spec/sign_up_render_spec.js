describe("SignUp Render", function() {


    beforeEach(function() {
        init_activity_database();
        var activities = JSON.parse(localStorage.activities);
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
                    bids:[],
                    biddings:{}
                }
        };
        var activity_ids = ["0", "1"];
        localStorage.activities = JSON.stringify(two_activities);
        localStorage.activity_ids = JSON.stringify(activity_ids);
        localStorage.current_activity_id = "1";
    });

    afterEach(function(){
        localStorage.clear();
    });


    it("should show all signed up users by activity name", function(){
        var sign_ups = render_sign_ups("second activity");

        expect(sign_ups.length).toBe(3);
        expect(sign_ups[0].name).toBe("仝键");
        expect(sign_ups[1].name).toBe("于硕");
        expect(sign_ups[2].name).toBe("吴京川");

    });

});