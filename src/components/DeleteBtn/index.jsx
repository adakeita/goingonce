import { useState } from 'react';
import { deleteListing } from '../../lib/api';
import './delete.css';

const DeleteBtn = ({ listingId, token, setShouldRefresh }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    try {
      await deleteListing(listingId, token);
      setShowConfirmation(false);
      setShowMessage(true);
      setShouldRefresh(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {showConfirmation ? (
        <div className='deleteconfirmation-container'>
          <p className='deleteconfirmation-txt'>Are you sure you want to delete this listing?</p>
          <div className="permadeletebtn-container">
          <button className='deleteconfirmation-btn yes' onClick={handleDelete}>Yes</button>
          <button className='deleteconfirmation-btn no' onClick={() => setShowConfirmation(false)}>No</button>
          </div>
        </div>
      ) : (
        <button className='deletebtn-main' onClick={() => setShowConfirmation(true)}>Delete Listing</button>
      )}
      {showMessage && <p>Listing deleted</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default DeleteBtn;

