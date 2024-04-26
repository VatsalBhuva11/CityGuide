// const Itinerary = require('../models/Itinerary');
import {Itinerary} from '../models/Itenary.js'

export const createItinerary = async (req, res) => {
    console.log("entered controler for create Itinary");
    try {
        // Extract itinerary data from the request body
        const { UID, items } = req.body;

        // Create a new itinerary document
        const newItinerary = await Itinerary.create({ UID, items });

        // Respond with the newly created itinerary
        res.status(201).json(newItinerary);
    } catch (error) {
        console.error('Error creating itinerary:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getItinerariesByUID = async (req, res) => {
    try {
        // Extract UID from the request body
        const { UID } = req.body;

        // Fetch itineraries with the same UID from the database
        const itineraries = await Itinerary.find({ UID });

        // Respond with the fetched itineraries
        res.json(itineraries);
    } catch (error) {
        console.error('Error fetching itineraries:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
