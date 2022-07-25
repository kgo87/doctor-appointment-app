const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.MONGOURL);

const connection = mongoose.connection;

connection.on('connected', () => {console.log('MongoDB is connected')});

connection.on('error', (error) => {console.log('Error in MongoDB is connected', error)});

module.exports = mongoose;