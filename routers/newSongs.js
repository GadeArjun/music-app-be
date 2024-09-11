const express = require("express");
const newSongsController = require("../controllers/newSongs");

const router = express.Router();

router
  .get("/newsongs/", newSongsController.getAllNewSongs)
  .get("/newsongs/:id", newSongsController.getOneNewSongs);

exports.router = router;
