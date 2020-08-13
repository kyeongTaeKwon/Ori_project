import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nickname: String,
  password: String,
  email: String,
});

export default mongoose.model("User", userSchema);
