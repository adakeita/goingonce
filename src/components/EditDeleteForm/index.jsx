import { useState } from "react";
import { updateListing } from "../../lib/api";
import "./editdelete.css";
import DeleteBtn from "../DeleteBtn";

const EditDeleteForm = ({
  listingId,
  token,
  initialListingData,
  setShouldRefresh,
}) => {
  const initialData = initialListingData || {
    title: "",
    description: "",
    media: "",
  };
  const [listingData, setListingData] = useState(initialData);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setListingData({ ...listingData, [e.target.name]: e.target.value });
  };

  const handleEdit = async () => {
    try {
      const updatedListing = await updateListing(listingId, token, listingData);
      setSuccessMessage("Listing updated successfully!");
      setShouldRefresh(true);
    } catch (error) {
      setError(error.message);
      console.error("Error updating listing:", error);
    }
  };

  return (
    <div>
      <form className="editdeleteform">
        <h3 className="editdeleteform-title">Edit Listing</h3>
        <div className="editdelete-inputfield-container">
          <label htmlFor="title" className="editlabel">
            New Title
          </label>
          <input
            className="editdelete-inputfield edit-title"
            name="title"
            value={listingData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <label htmlFor="description" className="editlabel">
            New Description
          </label>
          <textarea
            className="editdelete-inputfield edit-description"
            name="description"
            value={listingData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <label htmlFor="media" className="editlabel">
            New Media
          </label>
          <input
            className="editdelete-inputfield edit-media"
            name="media"
            type="url"
            value={listingData.media}
            onChange={handleChange}
            placeholder="Media URL"
          />
        </div>
        <div className="editdelete-btn-container">
          <button className="handledit-btn" type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
        {error && <p>Error: {error}</p>}
      </form>
      <DeleteBtn listingId={listingId} token={token} />
    </div>
  );
};

export default EditDeleteForm;
