const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const _90sSongsRouter = require("./routers/_90'sSongs");
const hindiSongsRouter = require("./routers/hindiSongs");
const marathiSongsRouter = require("./routers/marathiSongs");
const newSongsRouter = require("./routers/newSongs");
const trendingSongsRouter = require("./routers/trendingSongs");
require("dotenv").config();

const server = express();
// middle wares =>
server.use(express.json());
server.use(cors());
server.use("/", _90sSongsRouter.router);
server.use("/", hindiSongsRouter.router);
server.use("/", marathiSongsRouter.router);
server.use("/", newSongsRouter.router);
server.use("/", trendingSongsRouter.router);

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
server.listen(process.env.PORT || 8089, () => {
  console.log("server connected to port = ", process.env.PORT);
});










