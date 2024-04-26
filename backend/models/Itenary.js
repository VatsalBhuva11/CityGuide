import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    }
});

const itinerarySchema = new mongoose.Schema({
    UID: {
        type: String,
        required: true,
    },
    items: {
        type: [
            {
                cityName: {
                    type: String,
                    required: true
                },
                places: {
                    type: [placeSchema],
                    default: []
                }
            }
        ],
        default: []
    }
});

export const Itinerary = mongoose.model('Itinerary', itinerarySchema);
