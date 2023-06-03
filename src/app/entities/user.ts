import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  fullname: string;
  nickname: string;
  email: string;
  posts: string[];
}

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
