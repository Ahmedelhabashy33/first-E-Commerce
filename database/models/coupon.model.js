import mongoose, { model, Schema } from "mongoose";
import { type } from "os";
import { types } from "util";

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: true,
      required: true,
    },
    expires: Date,
    discount: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Coupon = model("Coupon", schema);
