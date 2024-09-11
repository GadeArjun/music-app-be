const express = require("express");
const trendingSongsController = require("../controllers/trendingSongs");

const router = express.Router();

router.get("/trendingsongs/", trendingSongsController.getAllTrendingSongs);
exports.router = router;
