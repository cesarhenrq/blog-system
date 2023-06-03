import mongoose, { Document } from "mongoose";

export interface IPost extends Document {
  content: string;
  likes: number;
  author: string;
}

const PostSchema = new mongoose.Schema(
  {
    content: { type: String, required: true, minlength: 1, maxlength: 280 },
    likes: { type: Number, required: true, default: 0 },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model<IPost>("Post", PostSchema);

export default Post;
