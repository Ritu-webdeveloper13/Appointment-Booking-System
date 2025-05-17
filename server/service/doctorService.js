import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcryptjs";
import path from 'path';
import validator from "validator"


const createDoctor = async (doctorData,image) => {
  try {
    const {name, email, password, speciality,degree, experience,  about,
      available, fees,  address, date,
    } = doctorData;

    // Check if doctor already exists by email
    const isDoctorExist = await doctorModel.findOne({ email });
    if (isDoctorExist) {
      throw new Error(`Doctor already exists with this email: ${email}`);
    }
    //validating email format
    if(!validator.isEmail(email)){
      return res.status(500).json({ message: 'please enter a valid email' });
    }
    //validating strong password
    if (password.length < 8) {
      return res.status(500).json({ message: 'please enter a strong password' });
      
    }
    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create and save doctor
    const doctor = await doctorModel.create({
      name,
      email,
      password: hashedPassword,
      image,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address:JSON.parse(address),
      date: Date.now(),
    });

    return doctor;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all doctors
const getAllDoctors = async () => {
  try {
    const doctors = await doctorModel.find();
    return doctors;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a single doctor by ID
const getDoctorById = async (id) => {
  try {
    const doctor = await doctorModel.findById(id);
    if (!doctor) {
      throw new Error(`Doctor not found with ID: ${id}`);
    }
    return doctor;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update doctor
const updateDoctor = async (id, doctorData) => {
  try {
    const updatedDoctor = await doctorModel.findByIdAndUpdate(id, doctorData, {
      new: true,
    });
    if (!updatedDoctor) {
      throw new Error(`Doctor not found with ID: ${id}`);
    }
    return updatedDoctor;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a doctor
const deleteDoctor = async (id) => {
  try {
    const deletedDoctor = await doctorModel.findByIdAndDelete(id);
    if (!deletedDoctor) {
      throw new Error(`Doctor not found with ID: ${id}`);
    }
    return deletedDoctor;
  } catch (error) {
    throw new Error(error.message);
  }
};

export {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
