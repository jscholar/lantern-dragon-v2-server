const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  user: { type: String, default: 'anon' },
  content: { type: String, required: true },
  date: { type: String }
});

module.exports = mongoose.model('Comment', commentSchema);
