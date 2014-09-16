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

        var activities_json = JSON.parse(localStorage.activities);
        var activity_ids = JSON.parse(localStorage.activity_ids);
        expect(activity_ids.length).toBe(1);
        expect(activities_json["0"].name).toBe(activity_name);
        expect(JSON.stringify(activities_json["0"].sign_ups)).toBe("[]");
        expect(JSON.stringify(activities_json["0"].bids)).toBe("[]");
        expect(JSON.stringify(activities_json["0"].biddings)).toBe("{}");
        expect(localStorage.current_activity_id).toBe("0");
    });

    it("should activity id generator increase with creating activity", function(){
        var activity = new Activity("first activity");
        activity.create();
        activity = new Activity("second activity");
        activity.create();
        activity = new Activity("third activity");
        activity.create();

        expect(localStorage.activity_id_generator).toBe("3");

        var activities_json = JSON.parse(localStorage.activities);
        expect(activities_json["0"].name).toBe("first activity");
        expect(activities_json["1"].name).toBe("second activity");
        expect(activities_json["2"].name).toBe("third activity");

        var activity_ids = JSON.parse(localStorage.activity_ids);
        expect(activity_ids.length).toBe(3);
        expect(activity_ids[0]).toBe("0");
        expect(activity_ids[1]).toBe("1");
        expect(activity_ids[2]).toBe("2");
    });

});