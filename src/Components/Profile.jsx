import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoMdSettings } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-300 flex justify-center items-center p-5">
      {/* Cut Icon */}
      <button className="absolute top-10 right-10 text-4xl cursor-pointer hover:text-red-500 transition-all duration-300">
        <Link to={'/'}><FaArrowRightLong /></Link>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md transition-transform transform hover:scale-105">
        {/* Profile Header */}
        <div className="flex items-center justify-center bg-blue-600 p-6">
          <CgProfile className="text-8xl text-white" />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Rahul Shah</h2>
          <p className="text-center text-gray-500 mb-4">rahul@example.com</p>
        </div>

        {/* Profile Details */}
        <div className="bg-gray-100 p-6 rounded-tl-xl rounded-tr-xl">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Account Information</h3>
          <div className="mb-2">
            <label className="block text-gray-600">Full Name</label>
            <p className="text-gray-800 font-medium">Rahul Shah</p>
          </div>
          <div className="mb-2">
            <label className="block text-gray-600">Email</label>
            <p className="text-gray-800 font-medium">rahul@example.com</p>
          </div>
          <div className="mb-2">
            <label className="block text-gray-600">Phone Number</label>
            <p className="text-gray-800 font-medium">+1234567890</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 flex flex-col gap-4">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            <IoMdSettings /> Update Profile
          </button>
          <button className="flex items-center justify-center gap-2 bg-green-500 text-white p-3 rounded-md shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
            <FaRegHeart /> View Wishlist
          </button>
          <button className="flex items-center justify-center gap-2 bg-red-500 text-white p-3 rounded-md shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105">
            <LuLogIn /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
