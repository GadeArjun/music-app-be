const express = require("express");
const marathiSongsController = require("../controllers/marathiSongs");

const router = express.Router();

router
  .get("/marathisongs/", marathiSongsController.getAllMarathiSongs)
  .get("/marathisongs/:id", marathiSongsController.getOneMarathiSongs);

exports.router = router;
