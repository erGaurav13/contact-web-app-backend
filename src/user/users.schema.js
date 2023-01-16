const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    number: {
      type: Number,

      required: true,
      trim: true,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("user", usersSchema);
module.exports = User;
