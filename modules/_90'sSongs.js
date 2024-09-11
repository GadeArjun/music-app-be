const { mongoose, Schema } = require("mongoose");

const _90sSongsSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  musicUrl: { type: String, required: true },
  musicYouTubeId: { type: String, required: true },
  durration: { type: String },
  category: { type: String, default: "_90'ssongs" },
});

const _90sSong = mongoose.model("_90sSong", _90sSongsSchema);

exports._90sSong = _90sSong;
