import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBook,
  FaTools,
  FaCogs,
  FaClipboardList,
  FaHistory,
  FaChevronDown,
  FaChevronUp,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { normallogo } from "../assets/images";
import { CiHome } from "react-icons/ci";
import { BiDiamond } from "react-icons/bi";
import { PiChartPieSliceLight, PiFileDashedFill } from "react-icons/pi";
import { AiFillTool } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";

const Sidebar = () => {
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);

  const toggleWorkflow = () => {
    setIsWorkflowOpen(!isWorkflowOpen);
  };

  return (
    <div className="h-[100vh] w-[15%] bg-black text-white flex flex-col">
      <div className="flex justify-center items-center px-5 ">
        <div className="flex h-[10px] w-full items-center gap-2 text-start px-4 py-5  mt-[25px] rounded-lg bg-gradient-to-br from-button-gradient to-gray-500 shadow-lg">
          <img src={normallogo} alt="Logo" className="object-fill" />
          <h1 className="text-[15px] font-bold">Normal Logistics</h1>
        </div>
      </div>
      <div className="p-4 flex-1">
        <div className="mb-4">
          <div className="mt-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <CiHome size={25}/>
              <span>Overview</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="mt-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <BiDiamond size={25}/>
              <span>Agents</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="mt-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <PiFileDashedFill size={25}/>
              <span>Knowledge Base</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="mt-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <AiFillTool size={25}/>
              <span>Actions & Tools</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="mt-2">
            <div
              className="flex items-center justify-between space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={toggleWorkflow}
            >
              <div className="flex items-center space-x-2 ">
                <PiChartPieSliceLight className="rotate-90" size={25}/>
                <span>Workflows</span>
              </div>
              {isWorkflowOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isWorkflowOpen && (
              <div className="relative">
                <div className="absolute left-2 h-full border-l-2 border-gray-700"></div>
                <div className="">
                  <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                    <div className="border-b-2 border-l-2  w-3 rounded-xl border-gray-700 "></div>
                    <span>Monitor</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                    <div className="border-b-2 border-l-2  w-3 rounded-xl border-gray-700 "></div>
                    <span>Workflow Library</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                    <div className="border-b-2 border-l-2  w-3 rounded-xl border-gray-700 "></div>
                    <span>Approvals & Flows</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                    <div className="border-b-2 border-l-2  w-3 rounded-xl border-gray-700 "></div>
                    <span>Task History</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <RiSettings5Fill size={25}/>
          <span>Settings</span>
        </div>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FaRegQuestionCircle size={25}/>
          <span>Professional Services</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
