const { Schema, model } = require('mongoose');
const timeblockSchema = require('./Timeblock');

const shiftSchema = new Schema({
  timeblocks: [timeblockSchema],
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User' 
  },
  
});

const Shift = model('Shift', shiftSchema);

module.exports = Shift;