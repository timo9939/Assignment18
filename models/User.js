const mongoose= require('mongoose')
const {model}=require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        // unique: true,
        required: true,
        // trim: true
    },

    email: { 
    type: String,
    required:true,
    // unique:true,
    // match:/@/ 
    },

    thoughts:[
        { type:mongoose.Schema.Types.ObjectId,
    ref:'Thought' }],


    friends: [{ type: mongoose.Schema.Types.ObjectId,
        ref: 'User' }]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
)
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
const User= model('User',UserSchema)
module.exports = User