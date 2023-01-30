import express from "express";
import asyncHandler from "express-async-handler"
import Event from '../models/eventModel.js'

const router= express.Router()

// @desc fetch all events
// @route GET/api/events/
// @access public

router.get('/', asyncHandler(async (req, res) =>{
  const events = await Event.find({})
  res.json(events)

})

)

// @desc fetch a single event
// @route GET/api/event/:id
// @access public

router.get('/:id', asyncHandler(async (req,res) => {
  const event = await Event.findById(req.params.id)
  if(event){
    res.json(event)
  }else {
    res.status(404).json({message: 'Event not found'})
  }
}))



export default router