import mongoose, { model, Schema } from "mongoose";
import { type } from "os";

const schema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isblocked: {
      type: boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const User = model("User", schema);
