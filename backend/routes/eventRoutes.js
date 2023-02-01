import express from "express";
import { getEvents, getEventById } from "../controllers/eventController.js";

const router= express.Router()

// @desc fetch all events
// @route GET/api/events/
// @access public

router.get('/', getEvents
)

// @desc fetch a single event
// @route GET/api/event/:id
// @access public

router.get('/:id', getEventById)



export default router