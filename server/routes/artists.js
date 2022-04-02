const express = require("express");
const router = express.Router();
const artistController = require("../controller/artists");
const multer = require("multer");
const { loginCheck } = require("../middleware/auth");

// Image Upload setting
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/artist");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/all-artist", artistController.getAllArtist);
router.post(
  "/add-artist",
  loginCheck,
  upload.single("cImage"),
  artistController.postAddArtist
);
router.post("/edit-artist", loginCheck, artistController.postEditArtist);
router.post(
  "/delete-artist",
  loginCheck,
  artistController.getDeleteArtist
);

module.exports = router;
