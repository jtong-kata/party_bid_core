describe("SignUp Render", function() {


    beforeEach(function() {
        init_activity_database();
        init_two_activity();
        init_sign_ups();
//        localStorage.activities = JSON.stringify(two_activities);
//        localStorage.activity_ids = JSON.stringify(activity_ids);
        localStorage.current_activity = "1";
    });

    afterEach(function(){
        localStorage.clear();
    });


    it("should show all signed up users by activity name", function(){
        var sign_ups = render_sign_ups("1");

        expect(sign_ups.length).toBe(3);
        expect(sign_ups[0].name).toBe("仝");
        expect(sign_ups[1].name).toBe("于");
        expect(sign_ups[2].name).toBe("吴");

    });

});