import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex min-w-full min-h-screen bg-primary rounded-lg overflow-hidden">

      {/* Left */}
      <div className=" w-1/2 flex flex-col items-center justify-center p-4">
          <p className="text-[50px] font-semibold mb-4">
            Let's Book Appointment <br />
            With Your Doctors.
          </p>
        <div className="mb-4 flex gap-2">
          <img
            src={assets.group_profiles}
            alt="Group Profiles"
            className="mx-auto mb-2 "
          />
          <p className="text-gray-700 text-[20px]">
            Simply browse through our extensive list of trusted doctors, <br />
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
      <div className="w-1/2 flex flex-col items-center justify-center">
        <img className=" w-full " src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
