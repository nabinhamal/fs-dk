import React from 'react'
import Header from './Header'
import { FaUtensils, FaShoppingBag, FaMotorcycle, FaPhone, FaEnvelope } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
        {/* Services Container */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Our Services</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Dine-in */}
            <div className="bg-white p-4 rounded-full shadow">
              <div className="bg-blue-500 rounded-full p-3 mb-4 mx-auto">
                <FaUtensils className="text-white text-5xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Dine-in</h3>
            </div>

            {/* Takeout */}
            <div className="bg-white p-4 rounded-full shadow">
              <div className="bg-green-500 rounded-full p-3 mb-4 mx-auto">
                <FaShoppingBag className="text-white text-5xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Takeout</h3>
            </div>

            {/* Delivery */}
            <div className="bg-white p-4 rounded-full shadow">
              <div className="bg-red-500 rounded-full p-3 mb-4 mx-auto">
                <FaMotorcycle className="text-white text-5xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Delivery</h3>
            </div>
          </div>
        </div>

        {/* Contact Us Container */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 uppercase">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            <p className="text-xl">Phone: 123-456-7890</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <p className="text-xl">Email: info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
