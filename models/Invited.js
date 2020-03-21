const mongoose = require("mongoose");

const InvitedSchema = new mongoose.Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  amount: {
    type: String
  },
  status: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Invited = mongoose.model("Invited", InvitedSchema);
