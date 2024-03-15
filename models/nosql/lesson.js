const mongoose = require("mongoose");

const LessonScheme  = new mongoose.Schema(
    {
        name:{
            type:String,
        }, 
        level:{
            type:String,
        }, 
        description:{
            type:String,
        }
    },{
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("lessons",LessonScheme)