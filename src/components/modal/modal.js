import Modal from "react-bootstrap/Modal";

const modalBox = ({ title, body, show, hide }) => {
  return (
    <div>
      <Modal
        dialogClassName="modal-90w"
        show={show}
        onHide={hide}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{body}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default modalBox;
