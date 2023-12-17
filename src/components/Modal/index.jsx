import { useEffect } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
      <div className="close-modal-btn-container">
          <button className="close-modal-btn" onClick={onClose}>
            {" "}
            X{" "}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
