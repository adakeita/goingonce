import "./newlistingmodal.css";

const NewListingModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NewListingModal;
