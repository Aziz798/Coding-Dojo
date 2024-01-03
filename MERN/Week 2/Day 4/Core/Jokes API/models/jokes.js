const mongoose = require('mongoose');

const JokesSchema  = new mongoose.Schema({
    setup:{
        type:String,
        required:[true,"{PATH} is required"],
        minLength:[10,"{PATH} should be atleast 10 characters"]
    },
    punchLine:{
        type:String,
        required:[true,"{PATH} is required"],
        minLength:[3,"{PATH} should be atleast 3 characters"]
    }
},{timestamps:true});

const Jokes = mongoose.model("Jokes",JokesSchema);
module.exports= Jokes;