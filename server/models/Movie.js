import mongoose from "mongoose";
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  recommendations: Number,
  genreId: String,
});

export default mongoose.model("Movie", movieSchema);
