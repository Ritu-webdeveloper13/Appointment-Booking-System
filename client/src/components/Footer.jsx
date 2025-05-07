import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        {/* Left */}
        <div>
          <div className="h-10 ">
            <img
              className=" w-30 h-10   cursor-pointer"
              src={assets.prescripto_logo}
              alt=""
            />
          </div>
          <div className="w-full md:w-2/3 text-gray-800 leading-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
