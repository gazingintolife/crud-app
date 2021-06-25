const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String
}, {collection: 'userdata'});

module.exports = mongoose.model('Data', dataSchema);
