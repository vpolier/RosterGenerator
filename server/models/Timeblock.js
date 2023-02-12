const { Schema, model } = require('mongoose');

const timeblockSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },shift: {
    type: String,
    required: false,
    default: null
  },
  
});

//const Timeblock = model('Timeblock', timeblockSchema);

module.exports = timeblockSchema;
