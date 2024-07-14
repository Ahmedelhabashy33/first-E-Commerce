import mongoose, { model, Schema } from "mongoose";
import { type } from "os";
import { types } from "util";

const schema = new mongoose.Schema(
  {
    comment: String,
    user: {
      type: types.objectId,
      ref: "User",
      required: true,
    },
    rate: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    product: {
      type: types.objectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Review = model("Review", schema);
