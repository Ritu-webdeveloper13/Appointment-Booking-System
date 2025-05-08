import { createDoctor,getAllDoctors,getDoctorById,updateDoctor,deleteDoctor } from "../service/doctorService.js";


 const createDoctorController = async (req, res) => {
    try {
      const doctorData = req.body;
      const DocImage = req.file;
      const doctor = await createDoctor(doctorData,DocImage);
      res.status(201).json({ message: 'Doctor created successfully', doctor });
    } catch (error) {
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
      res.status(200).json({ message: 'Doctor updated successfully', updatedDoctor });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteDoctorController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedDoctor = await deleteDoctor(id);
      res.status(200).json({ message: 'Doctor deleted successfully', deletedDoctor });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export {createDoctorController,updateDoctorController,getAllDoctorsController,getDoctorByIdController,deleteDoctorController}