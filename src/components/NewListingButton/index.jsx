import { useState } from 'react';
import NewListingModal from '../NewListingModal';
import NewListingForm from '../NewListingForm';


const NewListingButton = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const isLoggedIn = Boolean(localStorage.getItem('jwtToken'));

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    if (!isLoggedIn) {
        return null; // Don't render anything if not logged in
    }

    return (
        <>
            <button onClick={openModal} className="your-button-styles">Create New Listing</button>
            <NewListingModal isOpen={isModalOpen} onClose={closeModal}>
                <NewListingForm />
            </NewListingModal>
        </>
    );
};

export default NewListingButton;
