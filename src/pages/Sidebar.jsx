import React from "react";
import { FaTasks, FaCog, FaClipboardList, FaSearch } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="h-[100vh] bg-gray-900 text-white flex flex-col">
      <div className="text-center p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Normal Logistics</h1>
      </div>
      <div className="p-4 flex-1">
        <div className="mb-4">
          <h2 className="text-gray-500 uppercase text-sm">Overview</h2>
          <div className="mt-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaTasks />
              <span>Overview</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-gray-500 uppercase text-sm">Agents</h2>
          <div className="mt-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaCog />
              <span>Agents</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-gray-500 uppercase text-sm">Knowledge Base</h2>
          <div className="mt-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaClipboardList />
              <span>Knowledge Base</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-gray-500 uppercase text-sm">Workflows</h2>
          <div className="mt-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaSearch />
              <span>Monitor</span>
            </div>
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaSearch />
              <span>Workflow Library</span>
            </div>
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaSearch />
              <span>Approvals & Flows</span>
            </div>
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <FaSearch />
              <span>Task History</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaCog />
          <span>Settings</span>
        </div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaSearch />
          <span>Professional Services</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
