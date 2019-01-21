const mongoose = require('mongoose');

// setup mongoDB connection
const mongoURL = "mongodb+srv://cindy:cindy@cluster0-2ougt.mongodb.net/test?retryWrites=true"; // make sure to change to your mongoURI
const options = {
    useNewUrlParser: true
};
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function() { console.log('database connected'); });
module.exports = db;
