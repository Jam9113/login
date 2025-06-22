const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  role: {
    type: String,
    enum: ['admin', 'employee'], 
    default: 'employee' 
  }
});

module.exports = mongoose.model('User', userSchema);

