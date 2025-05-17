import express from 'express'
import {doctorList,changeAvailability} from '../controllers/doctorController.js'


const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/change-availability', changeAvailability)

export default doctorRouter