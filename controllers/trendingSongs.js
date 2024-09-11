const trendingSongsModule = require("../modules/trendingSongs");
// const youTubeSearch = require("../script");

const trendingSongs = trendingSongsModule.TrendingSong;

// const insertSongs = async (allSongs) => {
//   try {
//     const insertedSongs = await trendingSongs.insertMany(allSongs);
//     console.log(insertedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const deleteAllSongs = async () => {
//   try {
//     const deletedSongs = await trendingSongs.deleteMany({ id: { $gt: 0 } });
//     console.log(deletedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

exports.getAllTrendingSongs = async (req, res) => {
  try {
    // const count = await trendingSongs.countDocuments();
    // await deleteAllSongs();
    // const allSongs = await youTubeSearch.searchYouTube("trending hindi songs");
    // await insertSongs(allSongs);
    const allTrendingSongs = await trendingSongs.find({}).sort({ id: 1 });
    res.json(allTrendingSongs);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
exports.getOneTrendingSongs = async (req, res) => {
  try {
    const id = +req.params.id;
    const song = await trendingSongs.find({ id: id });
    res.json(song);
  } catch (err) {
    res.json(err);
  }
};