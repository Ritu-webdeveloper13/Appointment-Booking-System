import express from 'express'
import {loginAdmin, createDoctorController, deleteDoctorController, getAllDoctorsController, getDoctorByIdController, updateDoctorController,appointmentsAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import {v2 as cloudinary} from 'cloudinary'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router()


// Create a new doctor (POST)
adminRouter.post('/add-doctor',authAdmin,upload.single('image'),createDoctorController);

adminRouter.post('/login',loginAdmin);
// Get all doctors (GET)
adminRouter.post('/getall-doctors',authAdmin, getAllDoctorsController);

adminRouter.post('/change-availability',authAdmin, changeAvailability);


// Get a single doctor by ID (GET)
adminRouter.get('/:id', getDoctorByIdController);

// Update a doctor by ID (PUT)
adminRouter.put('/:id', updateDoctorController);

// Delete a doctor by ID (DELETE)
adminRouter.delete('/:id', deleteDoctorController);

adminRouter.get('/appointments',authAdmin,appointmentsAdmin)

export default adminRouter