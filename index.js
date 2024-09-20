const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const _90sSongsRouter = require("./routers/_90'sSongs");
const hindiSongsRouter = require("./routers/hindiSongs");
const marathiSongsRouter = require("./routers/marathiSongs");
const newSongsRouter = require("./routers/newSongs");
const trendingSongsRouter = require("./routers/trendingSongs");
const searchSongsRouter = require("./routers/searchSongs");
require("dotenv").config();
const path = require("path");

const server = express();
// middle wares =>
server.use(express.static(__dirname + "/build"));
server.use(express.json());
server.use(cors());
server.use("/", _90sSongsRouter.router);
server.use("/", hindiSongsRouter.router);
server.use("/", marathiSongsRouter.router);
server.use("/", newSongsRouter.router);
server.use("/", trendingSongsRouter.router);
server.use("/", searchSongsRouter.router);
server.use("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

// mongoose connection =>

async function mongooseConnection() {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("mongoose connected");
      })
      .catch((err) => {
        console.log({ err });
      });
  } catch (err) {
    console.log(err);
  }
}

mongooseConnection();
// server connection =>
server.listen(process.env.PORT, () => {
  console.log("server connected to port = ", process.env.PORT);
});
