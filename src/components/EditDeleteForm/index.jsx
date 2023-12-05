import { useState } from 'react';
import { updateListing } from '../../lib/api';
import DeleteBtn from '../DeleteBtn';

const EditDeleteForm = ({ listingId, token, initialListingData, setShouldRefresh  }) => {
    // Initialize with empty values if initialListingData is not provided
    const initialData = initialListingData || { title: '', description: '', media: '' };
    const [listingData, setListingData] = useState(initialData);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setListingData({ ...listingData, [e.target.name]: e.target.value });
    };

    const handleEdit = async () => {
        try {
            const updatedListing = await updateListing(listingId, token, listingData);
            console.log('Listing updated:', updatedListing);
            setSuccessMessage('Listing updated successfully!');
            setShouldRefresh(true);
        } catch (error) {
            setError(error.message);
            console.error('Error updating listing:', error);
        }
    };

    return (
        <div>
            <form>
                <input
                    name="title"
                    value={listingData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <textarea
                    name="description"
                    value={listingData.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input
                    name="media"
                    type="url"
                    value={listingData.media}
                    onChange={handleChange}
                    placeholder="Media URL"
                />
                <button type="button" onClick={handleEdit}>Edit</button>
                {error && <p>Error: {error}</p>}
            </form>
            <DeleteBtn listingId={listingId} token={token} />
        </div>
    );
};

export default EditDeleteForm;

