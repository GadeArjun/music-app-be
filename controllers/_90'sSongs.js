const _90sSongsModule = require("../modules/_90'sSongs");
// const youTubeSearch = require("../script");

const _90sSongs = _90sSongsModule._90sSong;

// const insertSongs = async (allSongs) => {
//   try {
//     const insertedSongs = await _90sSongs.insertMany(allSongs);
//     console.log(insertedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

// const deleteAllSongs = async () => {
//   try {
//     const deletedSongs = await _90sSongs.deleteMany({ id: { $gt: 0 } });
//     console.log(deletedSongs);
//   } catch (err) {
//     console.log({ err });
//   }
// };

exports.getAll_90sSongs = async (req, res) => {
  try {
    // await deleteAllSongs();
    // const allSongs = await youTubeSearch.searchYouTube("_90s songs old 2020");
    // console.log(allSongs);

    // await insertSongs(allSongs);
    const all_90sSongs = await _90sSongs.find({}).sort({ id: 1 });
    res.json(all_90sSongs);
  } catch (err) {
    res.json(err);
  }
};

exports.getOne_90sSongs = async (req, res) => {
  try {
    const id = +req.params.id;
    const song = await _90sSongs.find({ id: id });
    res.json(song);
  } catch (err) {
    res.json(err);
  }
};
