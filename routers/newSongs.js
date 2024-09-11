const express = require("express");
const newSongsController = require("../controllers/newSongs");

const router = express.Router();

router.get("/newsongs/", newSongsController.getAllNewSongs);

exports.router = router;
