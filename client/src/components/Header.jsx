import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="  flex flex-col md:flex-row flex-wrap  bg-primary rounded-lg px-6 md:px-10 lg:px-20">

      {/* Left */}
      <div className=" md:w-1/2 flex flex-col items-start justify-center  gap-4  py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-blue-900 font-semibold leading-tight md:leading-tight lg:leading-tight">
            Let's Book Appointment <br />
            With Your Doctors.
          </p>
          <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28'
            src={assets.group_profiles}
            alt="Group Profiles"
          />
          <p className="text-gray-700 text-[15px]">
            Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
          </div>
          
        <a
          href="#speciality"
          className="mt-4 flex items-center gap-2 bg-blue-500/50 p-2 px-4 rounded-full text-blue-800 hover:underline font-medium"
        >
          Book Appointment <img src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right */}
      <div className="md:w-1/2 relative">
        <img className=" w-full md:absolute bottom-0 h-auto  rounded-lg " src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
