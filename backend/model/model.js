const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name : {type : String , required : true} ,
    age : {type : String , required : true}
} , { timestamps : true } )

module.exports = mongoose.model("papa" , schema)