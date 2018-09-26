var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||'mongodb://test:sikharin1@ds115353.mlab.com:15353/todomongo');

module.exports = {mongoose};
