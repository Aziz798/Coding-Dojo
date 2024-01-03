const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"{PATH} is required"],
        minLength:[3,"{PATH} should be atleast 3 charcters"]
    },
    price:{
        type:Number,
        required:[true,"{PATH} is required"]
    },
    description:{
        type:String,
        required:[true,"{PATH} is required"],
        minLength:[10,"{PATH} should be atleast 3 charcters"]
    }
},{timestamps:true});

const Product = mongoose.model("Product",ProductSchema);
module.exports= Product;

