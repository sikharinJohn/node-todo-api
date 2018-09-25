
const {MongoClient, ObjectID} = require('mongodb');

// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log("Connected to MongoDB server");

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result)=>{
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result)=>{
  //   console.log(result);
  // });

  // findOneAndDelete
  //   db.collection('Todos').findOneAndDelete({completed: false}).then( (result)=>{
  //     console.log(result);
  // });

  // // deleteMany on Users
  // db.collection('Users').deleteMany({name: 'Sikharin'}).then( (result)=>{
  //   console.log(result);
  // });

  // findOneAndDelete on Users
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5ba9fff859ae352a66c6839e')}).then( (result)=>{
      console.log(result);
  });

  //db.close();

});
