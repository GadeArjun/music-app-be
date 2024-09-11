const express = require("express");
const hindiSongsController = require("../controllers/hindiSongs");

const router = express.Router();

router.get("/hindisongs/", hindiSongsController.getAllHindiSongs);

exports.router = router;
