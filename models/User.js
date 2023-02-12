const mongoose = require('mongoose')
const UserSchema= new Schema({
    username:{type:String},
    email:{type:String},
    thoughts:{type:String},
    friends:{type:String}
})

module.exports=UserSchema