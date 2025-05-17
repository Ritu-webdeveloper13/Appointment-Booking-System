import jwt from "jsonwebtoken";
import {cloudinaryUpload,DeleteFileFromCloudinary} from '../middlewares/cloudinary.js'

import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../service/doctorService.js";
import appointmentModel from "../models/appointmentModel.js";

const createDoctorController = async (req, res) => {
  let uploadData = null;
  try {
    const imageLocalPath = req.file.path;
    const Originalname = req.file.originalname;
     uploadData = await cloudinaryUpload(imageLocalPath, Originalname);

    if (!uploadData) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }
    const doctorData = req.body;
    const image = uploadData.secure_url;

    const doctor = await createDoctor(doctorData, image);
    res.status(201).json({ message: "Doctor added successfully" });
  } catch (error) {
     if (uploadData && uploadData?.secure_url) {
     await DeleteFileFromCloudinary(uploadData?.secure_url)
    }
    res.status(500).json({ message: error.message });
  }
};

const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDoctorByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await getDoctorById(id);
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDoctorController = async (req, res) => {
  try {
    const { id } = req.params;
    const doctorData = req.body;
    const updatedDoctor = await updateDoctor(id, doctorData);
    res
      .status(200)
      .json({ message: "Doctor updated successfully", updatedDoctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDoctorController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDoctor = await deleteDoctor(id);
    res
      .status(200)
      .json({ message: "Doctor deleted successfully", deletedDoctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentails" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//api to get all appointments list

const appointmentsAdmin = async(req,res) =>{
  try {
    const appointments = await appointmentModel.find({})
    res.json({success:true,appointments}) 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export {
  loginAdmin,
  createDoctorController,
  updateDoctorController,
  getAllDoctorsController,
  getDoctorByIdController,
  deleteDoctorController,
  appointmentsAdmin
};
