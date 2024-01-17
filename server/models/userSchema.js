import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  OnlyQuiz: [],
  OnlyPoll: [],
});

const UserModel = mongoose.model("user", userScehma);
export default UserModel;
