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
        expect(activities_json[0].id).toBe("0");
        expect(activities_json[0].name).toBe(activity_name);
        expect(localStorage.current_activity).toBe("0");
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
        expect(activities_json[1].id).toBe("1");
        expect(activities_json[1].name).toBe("second activity");
    });

});