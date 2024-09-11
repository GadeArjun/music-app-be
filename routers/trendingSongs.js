const express = require("express");
const trendingSongsController = require("../controllers/trendingSongs");

const router = express.Router();

router
  .get("/trendingsongs/", trendingSongsController.getAllTrendingSongs)
  .get("/trendingsongs/:id", trendingSongsController.getOneTrendingSongs);

exports.router = router;
