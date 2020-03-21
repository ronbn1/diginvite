const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { registerValidation } = require("../../validation.js");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid/v4");
const verifytoken = require("./verifytoken");

//Register user
router.post("/", async (req, res) => {
  const {
    email,
    phone,
    groomName,
    brideName,
    hallName,
    hallAddress,
    eventDate,
    greetingTime,
    weddingTime,
    groomPName,
    bridePName,
    imageSrc,
    password,
    password2
  } = req.body;
  //Check input errors
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check Passwords
  if (password !== password2) return res.status(400).send("הסיסמאות לא זהות");
  //check if the email is already exist
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).send("האימייל קיים כבר במערכת");

    user = new User({
      email,
      phone,
      groomName,
      brideName,
      hallName,
      hallAddress,
      eventDate,
      greetingTime,
      weddingTime,
      groomPName,
      bridePName,
      imageSrc,
      password
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //check if the email exist
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).send("האימייל או הסיסמא שגויים");

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch)
      return res.status(401).send("האימייל או הסיסמא שגויים");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/userdata", async (req, res) => {
  try {
    console.log(req.body.id);
    const user = await User.findById(req.body.id);
    res.send(user);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/", verifytoken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.send(user);
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/:id", verifytoken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const {
      phone,
      groomName,
      brideName,
      hallName,
      hallAddress,
      eventDate,
      greetingTime,
      weddingTime,
      groomPName,
      bridePName,
      imageSrc
    } = req.body;

    user.phone = phone;
    user.groomName = groomName;
    user.brideName = brideName;
    user.hallName = hallName;
    user.hallAddress = hallAddress;
    user.eventDate = eventDate;
    user.greetingTime = greetingTime;
    user.weddingTime = weddingTime;
    user.groomPName = groomPName;
    user.bridePName = bridePName;
    user.imageSrc = imageSrc;
    await user.save();
    res.send(user);
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/imageupdate/:id/:imageSrc", verifytoken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const imageSrc = req.params.imageSrc;
    user.imageSrc = imageSrc;
    await user.save();
    res.send(user);
  } catch (err) {
    console.log(err.message);
  }
});
module.exports = router;
