const express = require("express");
const hindiSongsController = require("../controllers/hindiSongs");

const router = express.Router();

router
  .get("/hindisongs/", hindiSongsController.getAllHindiSongs)
  .get("/hindisongs/:id", hindiSongsController.getOneHindiSongs);

exports.router = router;
