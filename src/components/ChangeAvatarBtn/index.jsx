import { useState } from "react";
import Modal from "../Modal";
import UpdateAvatar from "../UpdateAvatar";
import "./changeavatarbtn.css";

const ChangeAvatarBtn = ({ userName, currentAvatar, onUpdateSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button className="change-avatar-btn teal-btn" onClick={openModal}>Change Avatar</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <UpdateAvatar
          userName={userName}
          currentAvatar={currentAvatar}
          onUpdateSuccess={(newAvatar) => {
            onUpdateSuccess(newAvatar);
            closeModal(); // Close modal after update
          }}
        />
      </Modal>
    </>
  );
};
export default ChangeAvatarBtn;
