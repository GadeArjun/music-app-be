const hindiSongsModule = require("../modules/hindiSongs");
// const youTubeSearch = require("../script");

const hindiSongs = hindiSongsModule.HindiSong;

// const insertSongs = async (allSongs) => {
//   try {
//     const insertedSongs = await hindiSongs.insertMany(allSongs);
//     console.log(insertedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const deleteAllSongs = async () => {
//   try {
//     const deletedSongs = await hindiSongs.deleteMany({ id: { $gt: 0 } });
//     console.log(deletedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

exports.getAllHindiSongs = async (req, res) => {
  try {
    // await deleteAllSongs();
    // const allSongs = await youTubeSearch.searchYouTube("hindi latest songs");
    // await insertSongs(allSongs);
    const allHindiSongs = await hindiSongs.find({}).sort({ id: 1 });
    res.json(allHindiSongs);
  } catch (err) {
    res.json(err);
  }
};
