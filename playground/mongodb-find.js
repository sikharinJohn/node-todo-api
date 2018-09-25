
const {MongoClient, ObjectID} = require('mongodb');

// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').find({_id: new ObjectID('5baa05b29450b6279948c0ed')}).toArray().then( (docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then( (count)=>{
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name: 'Sikharin'}).toArray().then( (docs)=>{
    console.log('Users');
    console.log(docs);
  }, (err)=>{
    console.log('Unable to fetch todos',err);
  });

    // db.collection('Users').find({ name: 'Sikharin'}).count().then( (count)=>{
    //   console.log(`User count: ${count}`);
    //
    // }, (err)=>{
    //   console.log('Unable to fetch todos',err);
    // });


  db.close();

});
