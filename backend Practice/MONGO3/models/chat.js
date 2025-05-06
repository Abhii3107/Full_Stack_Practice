const mongoose =require("mongoose");

const Chatschema =mongoose.Schema({
    from: {
        type : String,
        required: true
    },
    to: {
        type: String,
        required : true
    },
    message: {
        type :String,
        maxLength: 50
    },
    created_at: {
       type : Date
    }

});

const Chat= mongoose.model("Chat",Chatschema);

module.exports= Chat;