const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove().then( (result) =>{
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5bab8fe89450b6279948c1b3'}).then( (todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('5bab8fe89450b6279948c1b3').then( (todo)=>{
  console.log(todo);
});
