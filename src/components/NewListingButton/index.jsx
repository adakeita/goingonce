import { useState } from "react";
import NewListingModal from "../NewListingModal";
import NewListingForm from "../NewListingForm";
import "./listingbutton.css";
import buttonImage from "../../assets/images/listing-btn.png";

const NewListingButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem("jwtToken"));

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  if (!isLoggedIn) {
    return null; // Don't render anything if not logged in
  }

  return (
    <>
      <div className="listingbtn-container">
        <button onClick={openModal} className="new-listing-btn">
          <div className="listingbtn-image-container">
            <img src={buttonImage} alt="" className="listingbtn-image" />
          </div>
        </button>
        <NewListingModal isOpen={isModalOpen} onClose={closeModal}>
          <NewListingForm />
        </NewListingModal>
      </div>
    </>
  );
};

export default NewListingButton;
