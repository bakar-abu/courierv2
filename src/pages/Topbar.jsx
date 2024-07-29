import { ChevronRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import { MdOutlineLogout } from "react-icons/md";
const Topbar = () => {
  return (
    <div className="bg-background text-white flex justify-between p-4 items-center">
      <button className="flex justify-between items-center py-3 w-[40%] border border-0.5 border-gray-500 rounded-lg">
        <span className="ml-4">Chat with Copilot</span>
        <div className="flex justify-center items-center bg-button-gray hover:opacity-70 px-3 py-1 rounded-sm mr-3">
        <ChevronRightIcon className="w-5 h-5  bg-button-gray" /> 
        </div>
      </button>

      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 p-2 rounded-lg bg-gradient-to-br from-button-gradient to-gray-500 shadow-lg">Select date</button>
        <button className="bg-gray-700 p-2 rounded-lg bg-gradient-to-br from-button-gradient to-gray-500 shadow-lg"><MdOutlineLogout size={23} /></button>
      </div>
    </div>
  );
};
export default Topbar;
