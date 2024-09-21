const express = require("express");
const SearchSongController = require("../controllers/searchSongs");

const router = express.Router();

router
  .get("/searchsongs", SearchSongController.getAllSearchSongs)
  .get("/searchsongs/:musicName", SearchSongController.insertSearchSongs);

exports.router = router;
