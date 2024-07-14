import mongoose, { model, Schema } from "mongoose";
import { type } from "os";
import { types } from "util";

const schema = new mongoose.Schema(
  {
    title: {
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
    description: {
      type: String,
      required: true,
      minlength: [10, "description too short"],
      maxlength: [2000, "description too long"],
    },
    imagecover: String,
    images: [String],
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    priceAfterdiscount: {
      type: Number,
      required: true,
      min: 0,
    },
    sold: Number,
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: types.ObjectId,
      ref: "category",
    },
    subcategory: {
      type: types.ObjectId,
      ref: "subcategory",
    },
    brand: {
      type: types.ObjectId,
      ref: "brand",
    },
    rateAvg: {
      type: Number,
      min: 0,
      max: 5,
    },
    ratecount: Number,
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
export const Product = model("Product", schema);
