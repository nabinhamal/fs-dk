
import React from "react";
import { LoginBg1, Logo, map } from "../assets";
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Added icons
import Header from "./Header";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* About Us Section */}
      <div className="flex-1 bg-orange-100 rounded-lg shadow-lg p-8">
        <Header />
        <div className="flex flex-col gap-4">
          <div className="bg-orange-100 rounded-full px-4 py-1 flex items-center justify-center">
            <p className="text-lg font-semibold text-orange-500">
              
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="font-extrabold text-5xl md:text-7xl text-headingColor tracking-wider">
            About Our Restaurant
            </p>

            <p className="text-textColor text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              ipsam doloribus et similique distinctio, rem deleniti ipsa,
              nesciunt vitae labore voluptates sunt ducimus mollitia id libero!
              Nostrum expedita libero recusandae?
            </p>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-full w-full">
          <img
            className="absolute top-0 right-0 w-full h-full object-cover"
            src={LoginBg1}
            alt=""
          />

          <div className="w-full h-full p-4 bg-lightOverlay backdrop-blur-md flex items-center justify-center">
            <img src={map} className="relative h-full w-full object-cover " alt="" />
          </div>
        </div>
      </div>

    
    </div>
  );
};
  
export default AboutUs;
