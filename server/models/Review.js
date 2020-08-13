import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  userId: String,
  movieId: String,
  recommendations: Number,
});

export default mongoose.model("Review", reviewSchema);
