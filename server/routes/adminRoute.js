import express from 'express'
import { createDoctorController, deleteDoctorController, getAllDoctorsController, getDoctorByIdController, updateDoctorController } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()


// Create a new doctor (POST)
adminRouter.post('/add-doctor',upload.single('image'),createDoctorController)
// Get all doctors (GET)
adminRouter.get('/getall-doctor', getAllDoctorsController);

// Get a single doctor by ID (GET)
adminRouter.get('/:id', getDoctorByIdController);

// Update a doctor by ID (PUT)
adminRouter.put('/:id', updateDoctorController);

// Delete a doctor by ID (DELETE)
adminRouter.delete('/:id', deleteDoctorController);

export default adminRouter