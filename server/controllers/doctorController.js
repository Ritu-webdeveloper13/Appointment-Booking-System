import doctorModel from "../models/doctorModel.js";

const changeAvailability = async (req, res)=> {
try {
    
    const {docId} = req.body

    const docData = await doctorModel.findById(docId)
    await doctorModel.findByIdAndUpdate(docId,{available:!docData.available})
     res.status(200).json({message: 'Availability Changed'});

} catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
}
}

const doctorList = async (req, res)=> {
    try {
        const doctors = await doctorModel.find({}).select('-password -email')
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export {changeAvailability,doctorList}