import React, { Fragment, useState } from "react";
import MultiStepForm from "../components/multistep/MultiStepForm";
import { RiRobot3Line } from "react-icons/ri";
import Modal from "../components/multistep/Modal";
// import DynamicTable from "../components/table/DynamicTable";

export default function ManageAgent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    agentName: "",
    botDescription: "",
    agentType: "",
    kbType: "",
  });
  const columns = [
    { title: "Agent Name", key: "agentName" },
    { title: "Bot Description", key: "botDescription" },
    { title: "Agent Type", key: "agentType" },
    { title: "KB Type", key: "kbType" },
  ];

  const data = [formData];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="h-[100vh] bg-gray-800">
      <div className="w-full flex justify-end">
        <button
          onClick={openModal}
          className="flex items-center gap-2 bg-white rounded-xl px-5 py-4 shadow-2xl text-gray-700 font-manrope "
        >
          <RiRobot3Line /> Add
        </button>
      </div>
      <div>{/* <DynamicTable columns={columns} data={data} /> */}</div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MultiStepForm formData={formData} setFormData={setFormData} />
      </Modal>
    </div>
  );
}
