const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String
  },
  phone: {
    type: String
  },
  groomName: {
    type: String
  },
  brideName: {
    type: String
  },
  hallName: {
    type: String
  },
  hallAddress: {
    type: String
  },
  eventDate: {
    type: String
  },
  greetingTime: {
    type: String
  },
  weddingTime: {
    type: String
  },
  groomPName: {
    type: String
  },
  bridePName: {
    type: String
  },
  imageSrc: {
    type: String
  },
  password: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
