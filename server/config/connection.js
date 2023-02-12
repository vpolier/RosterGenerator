const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/roster-generator',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).
catch(error => handleError(error));
module.exports = mongoose.connection;