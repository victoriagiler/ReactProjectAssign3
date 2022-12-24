import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true,
    default: 0
  },
  description:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  dateTime:{
    type: String,
    required: true
  },
  countInStock:{
    type: Number,
    required: true,
    degault: 0
  }
},{
  timestamps: true
});

const Event = mongoose.model('events', eventSchema)
export default Event