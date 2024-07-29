import React from "react";
const Topbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between p-4 items-center">
      <button className="bg-gray-700 p-2 rounded">Chat with Copilot</button>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 p-2 rounded">Select date</button>
        <button className="bg-gray-700 p-2 rounded">User Icon</button>
      </div>
    </div>
  );
};
export default Topbar;
