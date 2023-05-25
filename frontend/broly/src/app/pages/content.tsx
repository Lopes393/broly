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
    console.log(payload);
    const response = await axios.post("http://localhost:8000/public/index/feedback", payload);
    setShowModal(false);
    Swal.fire({
      icon: response.data.status,
      title: response.data.message,
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  return (
    <>
      <img className="logo" src="https://siap.com.br/wp-content/themes/siap/img/logomarca.png" />
      <CustomModal show={showModal} onSubmit={onSave} title={title} />
      <div className="developed">
        <p>
          &copy;Developed By <b>Murilo Lopes</b>
        </p>
      </div>
    </>
  );
};

export default Content;
