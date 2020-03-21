const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Invited = require("../../models/Invited");
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  try {
    const { name, phone, amount, status, user } = req.body;
    const invite = new Invited({
      name,
      phone,
      amount,
      status,
      user
    });
    await invite.save();
    res.send(invite);
  } catch (err) {
    console.log("error here");
  }
});

router.get("/:id", async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.params.id);
  const data = await Invited.find({ user: userId });
  res.send(data);
});
module.exports = router;
