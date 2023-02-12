const express = require('express');
const router=require('express').Router()

// Require model
const { UserSchema } = require('./models/User.js');
const app=express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get('/',(req,res)=>{
UserSchema.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });


})