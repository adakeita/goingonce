import { useState } from "react";
import Modal from "../Modal";
import BidForm from "../BidForm";

const BidBtn = ({ listingId, onBidSuccess }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button onClick={openModal} className="placebid-btn">
        Place a Bid
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BidForm
          listingId={listingId}
          onBidSuccess={() => {
            onBidSuccess();
            closeModal();
          }}
        />
      </Modal>
    </>
  );
};

export default BidBtn;
