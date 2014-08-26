function init_activity_database(){
    localStorage.activity_id_generator = "0";
    localStorage.current_activity_id = "";
    localStorage.activity_ids = "[]";
    localStorage.activities = "{}";
}


function init_two_activity() {
    localStorage.activity_id_generator = 2;
    var activities = JSON.parse(localStorage.activities);
    var activity_ids = JSON.parse(localStorage.activity_ids);
    var activity_1 = {
        id: "0",
        name: "first activity",
        sign_ups:[],
        bids:[],
        biddings:{}

    };
    var activity_2 = {
        id: "1",
        name: "second activity",
        sign_ups:[],
        bids:[],
        biddings:{}
    };
    activities["0"] = activity_1;
    activities["1"] = activity_2;
    activity_ids.push("0","1");
    localStorage.activities = JSON.stringify(activities);
    localStorage.activity_ids = JSON.stringify(activity_ids);
}


function init_biddings(){
    localStorage.biddings = {};
}