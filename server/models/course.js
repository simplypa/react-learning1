const mongoose = require('mongoose');

const { Schema } = mongoose;

const CourseSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  instructors: {
    type: mongoose.Schema.Types.ObjectId, // 设定，instructors是一个primary key
    ref: 'User',
  },
  students: {
    type: [String],
    default: [],
  },

});

module.exports = mongoose.model('Course', CourseSchema);
