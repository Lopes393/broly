import React, { useState } from "react";
import CustomModal from "../components/modal";
import axios from "axios";
import Swal from "sweetalert2";

const Content: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const title = "O seu feedback é importante para nós";

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  async function onSave(payload: any) {
    const response = await axios.post("http://localhost:8000/public/index/feedback", payload);
    setShowModal(false);
    Swal.fire({
      icon: response.data.status,
      title: response.data.message,
    });
  }

  return (
    <>
      <CustomModal show={showModal} onHide={handleHideModal} onSubmit={onSave} title={title} />
    </>
  );
};

export default Content;
