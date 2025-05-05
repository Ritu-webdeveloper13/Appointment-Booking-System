import express from 'express'
import { addDoctor } from '../Controllers/adminController'
import upload from '../Middlewares/multer'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',upload.single('image'),addDoctor)

export default adminRouter