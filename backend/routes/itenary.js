import {createItinerary, getItinerariesByUID} from "../controllers/itenary.controller.js"
import express from "express";

const router = express.Router();
router.post("/createItenary",createItinerary);
router.post("/getItinary",getItinerariesByUID);
export default router;