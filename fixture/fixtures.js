function build_sms_json(content, phone_no){
    return {
        messages:[
            {
                "create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013",
                "message":content,
                "phone":phone_no
            }
        ]
    }
}