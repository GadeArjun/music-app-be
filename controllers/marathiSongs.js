const marathiSongsModule = require("../modules/marathiSongs");
// const youTubeSearch = require("../script");

const marathiSongs = marathiSongsModule.MarathiSong;

// const insertSongs = async (allSongs) => {
//   try {
//     const insertedSongs = await marathiSongs.insertMany(allSongs);
//     console.log(insertedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const deleteAllSongs = async () => {
//   try {
//     const deletedSongs = await marathiSongs.deleteMany({ id: { $gt: 0 } });
//     console.log(deletedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

exports.getAllMarathiSongs = async (req, res) => {
  try {
    // await deleteAllSongs();
    // const allSongs = await youTubeSearch.searchYouTube("marathi songs latest");
    // await insertSongs(allSongs);
    const allMarathiSongs = await marathiSongs.find({}).sort({ id: 1 });
    res.json(allMarathiSongs);
  } catch (err) {
    res.json(err);
  }
};
exports.getOneMarathiSongs = async (req, res) => {
  try {
    const id = +req.params.id;
    const song = await marathiSongs.find({ id: id });
    res.json(song);
  } catch (err) {
    res.json(err);
  }
};