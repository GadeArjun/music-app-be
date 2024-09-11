const { mongoose, Schema } = require("mongoose");

const newSongsSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  musicUrl: { type: String, required: true },
  musicYouTubeId: { type: String, required: true },
  durration: { type: String },
  category: { type: String, default: "newsongs" },
});

const NewSong = mongoose.model("NewSong", newSongsSchema);

exports.NewSong = NewSong;
