const newSongsModule = require("../modules/newSongs");
// const youTubeSearch = require("../script");

const newSongs = newSongsModule.NewSong;

// const insertSongs = async (allSongs) => {
//   try {
//     const insertedSongs = await newSongs.insertMany(allSongs);
//     console.log(insertedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const deleteAllSongs = async () => {
//   try {
//     const deletedSongs = await newSongs.deleteMany({ id: { $gt: 0 } });
//     console.log(deletedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

exports.getAllNewSongs = async (req, res) => {
  try {
    // await deleteAllSongs();
    // const allSongs = await youTubeSearch.searchYouTube("new song 2024");
    // await insertSongs(allSongs);
    const allNewSongs = await newSongs.find({}).sort({ id: 1 });
    res.json(allNewSongs);
  } catch (err) {
    res.json(err);
  }
};
