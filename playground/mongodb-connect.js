// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Sikharin', age: 25};
// var {name} =  user;
// console.log(name);

// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>{
  //   if(err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });

  // db.collection('Users').insertOne({
  //   //_id: 123,
  //   name: 'Sikharin',
  //   age: 33,
  //   location: 'Germany'
  // }, (err,result)=>{
  //   if(err) {
  //     return console.log('Unable to insert User',err);
  //   }
  //   console.log(JSON.stringify(result.ops));
  //   console.log(result.ops[0]._id.getTimestamp());
  // } );
  //
   db.close();

});
