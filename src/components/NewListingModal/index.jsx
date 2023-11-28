import { useEffect } from 'react';
import "./newlistingmodal.css";

const NewListingModal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
  
      // Cleanup function to remove the class when the component unmounts
      return () => {
        document.body.classList.remove('no-scroll');
      };
    }, [isOpen]);
  
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
