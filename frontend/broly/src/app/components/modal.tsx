import { Modal } from "react-bootstrap";
import { useState } from "react";

type ModalProps = {
  show: boolean;
  onSubmit: (payload: any) => void;
  title: string;
};

const CustomModal: React.FC<ModalProps> = ({ show, onSubmit, title }) => {
  const [payload, setPayload] = useState({});
  const [disabled, setDisabled] = useState(false);

  const onChangeFeedback = (event: any) => {
    setPayload({ ...payload, feedback: event.target.value });
  };

  function sendFeedback(payload: any) {
    onSubmit(payload);
    setDisabled(true);
  }

  return (
    <Modal show={show} className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea placeholder="Feedback..." className="input-modal" onChange={onChangeFeedback}></textarea>
      </Modal.Body>
      <div className="modal-footer">
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={() => sendFeedback(payload)}
          disabled={disabled}
        >
          Enviar
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
