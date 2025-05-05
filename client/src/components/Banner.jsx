import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className= "flex  bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 ">
      {/* Left */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div>
          <p className="text-[40px] font-semibold mb-4">Book Appointment </p>
          <p className="text-[40px] font-semibold mb-4" >With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}}className="mt-4 flex items-center gap-2 bg-blue-500/50 p-2 px-4 rounded-full text-blue-800 hover:underline font-medium">Create account</button>
      </div>

      {/* Right */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img  className="w-full absolute bottom-0 right-0 max-w-md bg" src={assets.appointment_img} alt=""/>
      </div>
    </div>
  );
};

export default Banner;
