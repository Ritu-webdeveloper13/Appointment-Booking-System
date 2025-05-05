import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/mongodb.js'
import connectCloudinary  from './Config/cloudinary.js'


// app config
const app = express()
const port = process.env.port || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin',adminRouter)
//  localhost:4000/api/admin/add-doctor

app.get('/',(req,res)=>{
    res.send('API WORKING ')
})

app.listen(port, ()=> console.group("server started",port))

