import mongoose from "mongoose";
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: String,
});

export default mongoose.model("Genre", genreSchema);
