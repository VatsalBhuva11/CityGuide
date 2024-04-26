import { Int32 } from "mongodb";
import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  Name: String,
  Places: [{ place: { type: mongoose.Schema.Types.ObjectId, ref: "places" } }],
  description: String,
  Population: {
    type: Int32,
  },
  Area: {
    type: Int32,
  },
  country: {
    type: String,
  },
});

export const City = mongoose.model('City', citySchema);
