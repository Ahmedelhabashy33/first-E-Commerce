import mongoose, { model, Schema } from "mongoose";
import { type } from "os";
import { types } from "util";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "name is require"],
      trim: true,
      required: true,
      minlength: [2, "too short category name"],
    },
    slug: {
      type: String,
      Lowercase: true,
      required: true,
      unique: [true, "slug is require"],
    },
    image: String,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Category = model("Category", schema);
