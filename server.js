const express= require('express')

const mongodb = require('mongodb').MongoClient

const app=express()
const port =3001

const connectionStringURI = `mongodb://127.0.0.1:27017/inventoryDB`;

// Declare a variable to hold the connection
let db;

mongodb.connect(
    // Defines connection between app and MongoDB instance
    connectionStringURI,
    // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      // Use client.db() constructor to add new db instance
      db = client.db();
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
    }
  );
  
  app.use(express.json())

  app.get('/read',(req,res)=>{
db.collection('UserSchema')
.find({})

.toArray((err, results) => {
  // Handles error or results
  if (err) throw err;
  res.send(results);
});

  })