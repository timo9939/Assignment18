const UserData = require('../models/User')
const User=require('../models/User')

const userController={
    readUser(req,res){
        User.find({})
        .then(UserData=>res.json(UserData))
        .catch(err=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    createUser(req,res){
        User.create({
            username:req.body.username,
            email:req.body.email,
        })
        .then(UserData=>res.json(UserData))
        .catch((err)=>res.json(err))
    }
}

module.exports=userController