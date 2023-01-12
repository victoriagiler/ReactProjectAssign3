import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use('/api/events', eventRoutes)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))