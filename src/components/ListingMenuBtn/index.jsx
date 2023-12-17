import { useState } from "react";
import Modal from "../Modal";
import EditDeleteForm from "../EditDeleteForm";
import "./listingmenu.css";
import listingMenuIcon from "../../assets/listingmenu.svg";

const ListingMenuBtn = ({
  listingId,
  token,
  initialListingData,
  setShouldRefresh,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="menu-listingbtn-container">
      <button onClick={openModal} className="menu-listing-btn">
        <div className="menu-listingbtn-image-container">
          <img src={listingMenuIcon} alt="" className="listingbtn-image" />
        </div>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditDeleteForm
          setShouldRefresh={setShouldRefresh}
          listingId={listingId}
          token={token}
          initialListingData={initialListingData}
        />
      </Modal>
    </div>
  );
};

export default ListingMenuBtn;
