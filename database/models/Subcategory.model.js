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
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
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
export const subCategory = model("subCategory", schema);
