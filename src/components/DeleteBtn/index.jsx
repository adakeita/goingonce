import { useState } from 'react';
import { deleteListing } from '../../lib/api';

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
        <div>
          <p>Are you sure you want to delete this listing?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      ) : (
        <button onClick={() => setShowConfirmation(true)}>Delete Listing</button>
      )}

      {showMessage && <p>Listing deleted</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default DeleteBtn;

