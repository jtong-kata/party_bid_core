describe("Activity", function() {


    beforeEach(function() {
        init_activity_database()
    });

    afterEach(function(){
        localStorage.clear();
    });

    it("should first activity was created on creating", function(){
        var activity_name = "first activity";

        var activity = new Activity(activity_name);
        activity.create();
        activity.active();

        var activity_json = JSON.parse(localStorage.activities);
        expect(activity_json.length).toBe(1);
        expect(activity_json[0].name).toBe(activity_name);
        expect(activity_json[0].sign_ups).toEqual([]);
        expect(activity_json[0].bids).toEqual([]);
        expect(localStorage.current_activity).toBe(activity_name);
    });

});