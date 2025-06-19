import { useState } from "react";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import Modal from "react-modal";
import { Tooltip } from "react-tooltip";

function StyledModal({ icon, title, center, width, children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={openModal}
        data-tooltip-id={title}
        data-tooltip-content={title}
        data-tooltip-place="bottom"
      >
        <Icon path={icon} size={1} color="var(--background-main)" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={title}
        className={{
          base: `modal container ${width ? "modal-width" : ""}`,
          afterOpen: "modal--after-open",
          beforeClose: "modal--before-close",
        }}
        overlayClassName="overlay"
        portalClassName="portal"
        closeTimeoutMS={150}
      >
        <h1 className="container-title">{title}</h1>
        <button onClick={closeModal}>
          <Icon path={mdiClose} size={1} color="var(--border-color)" />
        </button>
        <div className={`content ${center ? "section" : ""}`}>
          {children}
        </div>
      </Modal>
      <Tooltip id={title} />
    </div>
  );
}

export default StyledModal;