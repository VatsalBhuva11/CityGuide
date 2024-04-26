import { Int32 } from "mongodb";
import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  Name: String,
  description: String,
  rating: String,
});

export const Place = mongoose.model('Place', placeSchema);
