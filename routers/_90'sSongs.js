const express = require("express");
const _90sSongsController = require("../controllers/_90'sSongs");

const router = express.Router();

router
  .get("/_90ssongs/", _90sSongsController.getAll_90sSongs)
  .get("/_90ssongs/:id", _90sSongsController.getOne_90sSongs);

exports.router = router;
