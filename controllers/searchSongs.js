const searchSongSchema = require("../modules/searchSongs");
const searchSongs = searchSongSchema.SearchSong;
const youTubeSearch = require("../script");

const deleteAllSongs = async () => {
  try {
    const deletedSongs = await searchSongs.deleteMany({ id: { $gt: 0 } });
    console.log(deletedSongs);
  } catch (err) {
    console.log(err);
  }
};

const insertAllSongs = async (allSongs) => {
  try {
    const insertedSongs = await searchSongs.insertMany(allSongs);
    console.log(insertedSongs);
  } catch (err) {
    console.log(err);
  }
};

exports.getAllSearchSongs = async (req, res) => {
  try {
    console.log("ok");
    const allSongs = await searchSongs.find({}).sort({ id: 1 });
    res.json(allSongs);
  } catch (err) {
    res.json(err);
  }
};

exports.insertSearchSongs = async (req, res) => {
  try {
  
    const musicName =  "hindi new";
    //res.json(musicName);
    const allSongs = await youTubeSearch.searchYouTube(musicName);
    res.json(allSongs);
    await deleteAllSongs();
    await insertAllSongs(allSongs);
    //const allMusics = await searchSongs.find({}).sort({ id: 1 });
   ;
    console.log(musicName);
    console.log(allSongs);
    //res.json(allSongs);
  } catch (err) {
    res.json(err);
  }
};
