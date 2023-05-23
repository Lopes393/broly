import { Modal } from "react-bootstrap";
import { useState } from "react";

type ModalProps = {
  show: boolean;
  onHide: () => void;
  onSubmit: (payload: any) => void;
  data?: any;
  title: string;
};

const CustomModal: React.FC<ModalProps> = ({ show, onHide, onSubmit, title }) => {
  const [feedback, setFeedback] = useState("");

  const onChangeFeedback = (event: any) => {
    setFeedback(event.target.value);
  };

  return (
    <Modal show={show} onHide={onHide} className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea placeholder="Feedback..." className="input-modal" value={feedback} onChange={onChangeFeedback} />
      </Modal.Body>
      <div className="modal-footer">
        <button className="btn btn-outline-success" type="button" onClick={() => onSubmit(feedback)}>
          Salvar
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
