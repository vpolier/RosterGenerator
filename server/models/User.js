const { Schema, model } = require ('mongoose');
const bcrypt = require('bcrypt');
const { schema } = require('./Role');

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  title: {
  type: String,
  required: false,
  },

  password: {
    type: String,
    required: true,
    minlength: 5
  }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};
//Around line 63 you have your definition for User = change from mongoose.model to model On the last line, change from mongoose.model and just set it equal to User variable
const User = model('User', userSchema);

module.exports = User
