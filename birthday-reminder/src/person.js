const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Person', PersonSchema);
