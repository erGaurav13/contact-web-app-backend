const mongoose = require("mongoose");

const querrySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

const Querry = mongoose.model("query", querrySchema);
module.exports = Querry;
