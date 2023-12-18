import { useState } from "react";
import Modal from "../Modal";
import NewListingForm from "../NewListingForm";
import "./listingbutton.css";
import buttonImage from "../../assets/images/listing-btn.png";

const NewListingButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem("jwtToken"));

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  if (!isLoggedIn) {
    return null; 
  }

  return (
    <>
      <div className="listingbtn-container">
        <button onClick={openModal} className="new-listing-btn">
          <div className="listingbtn-image-container">
            <img src={buttonImage} alt="" className="listingbtn-image" />
          </div>
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <NewListingForm />
        </Modal>
      </div>
    </>
  );
};

export default NewListingButton;
