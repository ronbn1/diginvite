//const up = require("../../services/s3");
//const upload = require("../../services/s3");
const router = require("express").Router();
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid/v4");
const User = require("../../models/User");
//onst fileupload = require("express-fileupload");
const path = require("path");

aws.config.update({
  secretAccessKey: "2FvTwI7O7wKviN872/2YkPeVft9E3QFipQ9NIupN",
  accessKeyId: "AKIAI65Y5DVRTO6IWXXA",
  region: "us-east-2"
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "diginvite",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TEST" });
    },
    key: function(req, file, cb) {
      cb(null, req.s3key);
    }
  })
});
const singleFileUpload = upload.single("image");

const uploadS3 = (req, res) => {
  req.s3key = uuid();

  let downLoadUrl = `https://s3-us-east-2.amazonaws.com/diginvite/${req.s3key}`;
  return new Promise((resolve, reject) => {
    return singleFileUpload(req, res, err => {
      if (err) return reject(err);

      if (req.file) return resolve(downLoadUrl);
      else reject();
    });
  });
};

router.post("/", async (req, res) => {
  try {
    const url = await uploadS3(req, res);
    const user = await User.findById(req.body.id);
    user.imageSrc = url;
    await user.save();
    res.send("התמונה הועלתה");
  } catch (err) {
    res.send("חלה שגיאה !");
  }
});

router.get("/:type", async (req, res) => {
  const type = req.params.type;
  const images = await Image.find({ type });

  res.json(images);
});

// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const image = await Image.findById(id);

//     image.remove();
//     res.json("DELETED");
//   } catch (err) {
//     console.log(err);
//     res.status(400).send("ERROR");
//   }
// });
module.exports = router;
