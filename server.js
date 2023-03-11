


const express = require('express');
const db = require('./config/connection');
const {User,Thought}=require("./models")
const {ObjectId}=require('mongoose').Types


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// User API

app.get("/readAll", (req, res)=>{
  User.find({})
  .then(data=>res.json(data))
  .catch(err=>res.status(500).json(err))
})

app.get("/readOneUser/:_id", (req,res)=>{
  User.findOne({
    _id:req.params._id,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.post("/addUser",(req,res)=>{
  User.create({
    username: req.body.username,
    email: req.body.email,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.put("/User/update/:_id", (req,res)=>{
  User.findOneAndUpdate(
   
    {_id:req.params._id},

   req.body,
    {new:true},
  )
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.delete("/User/delete/:_id",(req,res)=>{
  User.deleteOne({
    _id:req.params._id,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

// Thoughts API

app.get("/Thought/readAll", (req, res)=>{
  Thought.find({})
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.get("/Thought/read/:_id", (req, res)=>{
  Thought.findOne({
    _id:req.params._id,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.post("/Thought/add", (req,res)=>{
  Thought.create({
    thoughtText: req.body.thoughtText,
    createdAt:req.body.createdAt,
    username: req.body.username,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});