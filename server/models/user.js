const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'instructor'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // 在此处添加其他属性
});

UserSchema.methods.isStudent = function () {
  return this.role === 'student';
};

UserSchema.methods.isInstructor = function () {
  return this.role === 'instructor';
};

UserSchema.methods.comparePassword = async function (password, callback) {
  const result = await bcrypt.compare(password, this.password);
  return callback(null, result);
};

// middleware
UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
