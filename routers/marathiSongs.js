const express = require("express");
const marathiSongsController = require("../controllers/marathiSongs");

const router = express.Router();

router.get("/marathisongs/", marathiSongsController.getAllMarathiSongs);

exports.router = router;
