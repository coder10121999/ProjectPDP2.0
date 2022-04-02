const { toTitleCase } = require("../config/function");
const artistModel = require("../models/artists");
const fs = require("fs");

class Artist {
  async getAllArtist(req, res) {
    try {
      let Artists = await artistModel.find({}).sort({ _id: -1 });
      if (Artists) {
        return res.json({ Artists });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async postAddArtist(req, res) {
    let { cName, cDescription, cStatus } = req.body;
    let cImage = req.file.filename;
    const filePath = `../server/public/uploads/artist/${cImage}`;

    if (!cName || !cDescription || !cStatus || !cImage) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
        return res.json({ error: "All filled must be required" });
      });
    } else {
      cName = toTitleCase(cName);
      try {
        let checkArtistExists = await artistModel.findOne({ cName: cName });
        if (checkArtistExists) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.log(err);
            }
            return res.json({ error: "Artist already exists" });
          });
        } else {
          let newArtist = new artistModel({
            cName,
            cDescription,
            cStatus,
            cImage,
          });
          await newArtist.save((err) => {
            if (!err) {
              return res.json({ success: "Artist created successfully" });
            }
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async postEditArtist(req, res) {
    let { cId, cDescription, cStatus } = req.body;
    if (!cId || !cDescription || !cStatus) {
      return res.json({ error: "All filled must be required" });
    }
    try {
      let editArtist = artistModel.findByIdAndUpdate(cId, {
        cDescription,
        cStatus,
        updatedAt: Date.now(),
      });
      let edit = await editArtist.exec();
      if (edit) {
        return res.json({ success: "Artist edit successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getDeleteArtist(req, res) {
    let { cId } = req.body;
    if (!cId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let deletedArtistFile = await artistModel.findById(cId);
        const filePath = `../server/public/uploads/artist/${deletedArtistFile.cImage}`;

        let deleteArtist = await artistModel.findByIdAndDelete(cId);
        if (deleteArtist) {
          // Delete Image from uploads -> artist folder 
          fs.unlink(filePath, (err) => {
            if (err) {
              console.log(err);
            }
            return res.json({ success: "Artist deleted successfully" });
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

const artistController = new Artist();
module.exports = artistController;
