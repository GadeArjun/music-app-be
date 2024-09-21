const express = require("express");
const SearchSongController = require("../controllers/searchSongs");

const router = express.Router();

router
  .get("/searchsongs/:name", SearchSongController.insertSearchSongs)
  .get("/searchsongs/", SearchSongController.getAllSearchSongs);

exports.router = router;
