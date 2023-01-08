import dotenv from 'dotenv'
import users from './data/users.js'
import events from './data/eventsData.js'
import User from './models/userModel.js'
import Event from './models/eventModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try{
    await Event.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

    const sampleEvents = events.map((e) => {
      return {...e, user: adminUser}

    })
    await Event.insertMany(sampleEvents)
    console.log('Data was imported!')
    process.exit(1)

  } catch(error){
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () =>{
  try{
    await Event.deleteMany()
    await User.deleteMany()
    console.log('Data was destroyed!')
    process.exit(1)
  }catch(error){
    console.error(`${error}`)
    process.exit(1)
  }
}

if(process.argv[2] === '-d'){
  destroyData()
}else {
  importData()
}