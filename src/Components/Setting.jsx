import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { MdNotifications, MdPrivacyTip, MdSecurity } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex justify-center items-center p-5">

         {/* cuticon */}
         <button className="absolute top-10 right-10 text-4xl cursor-pointer hover:text-red-500 transition-all duration-300">
                <Link to={'/'} ><FaArrowRightLong /></Link>
            </button>
            {/* cuticon */}
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl animate__animated animate__pulse absolute">
        {/* Settings Header */}
        <div className="flex items-center gap-4 mb-6">
          <IoMdSettings className="text-5xl text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Settings</h2>
            <p className="text-gray-500">Manage your account preferences and privacy settings</p>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Account Section */}
          <div className="bg-blue-50 p-4 rounded-md shadow-sm flex items-center gap-4">
            <MdPrivacyTip className="text-3xl text-blue-600" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">Privacy Settings</h3>
              <p className="text-gray-600">Control who can see your profile and activity</p>
            </div>
            <button className="text-blue-600 font-medium hover:underline">Manage</button>
          </div>

          {/* Notifications Section */}
          <div className="bg-blue-50 p-4 rounded-md shadow-sm flex items-center gap-4">
            <MdNotifications className="text-3xl text-green-600" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">Notifications</h3>
              <p className="text-gray-600">Adjust notification settings and preferences</p>
            </div>
            <button className="text-green-600 font-medium hover:underline">Manage</button>
          </div>

          {/* Security Section */}
          <div className="bg-blue-50 p-4 rounded-md shadow-sm flex items-center gap-4">
            <MdSecurity className="text-3xl text-red-600" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">Security</h3>
              <p className="text-gray-600">Set up two-factor authentication and more</p>
            </div>
            <button className="text-red-600 font-medium hover:underline">Manage</button>
          </div>

          {/* Support Section */}
          <div className="bg-blue-50 p-4 rounded-md shadow-sm flex items-center gap-4">
            <BiSupport className="text-3xl text-yellow-600" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">Support</h3>
              <p className="text-gray-600">Get help with your account and settings</p>
            </div>
            <button className="text-yellow-600 font-medium hover:underline">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
