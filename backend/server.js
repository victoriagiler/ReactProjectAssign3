import events from './data/eventsData'
import express from 'express'

const app = express()

app.get('/api/events', (req, res) =>{
  res.json(events)
})

app.get('/api/event/:id', (req, res)=>{
  const event = events.find((e) => e._id === req.params.id)
  res.json(event)
})

app.listen(5000, console.log('Server is running on port 5000'))