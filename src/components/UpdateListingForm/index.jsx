import { useState, useEffect } from "react";
import { updateListing } from "../../lib/api";

const UpdateListingForm = ({ listingData, onUpdateSuccess, token }) => {
  const [formData, setFormData] = useState({
    title: listingData.title || "",
    description: listingData.description || "",
    tags: listingData.tags.join(", ") || "",
    media: listingData.media.join(", ") || "",
    endsAt: listingData.endsAt || "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize form with current listing data
    setFormData({
      title: listingData.title || "",
      description: listingData.description || "",
      tags: listingData.tags.join(", ") || "",
      media: listingData.media.join(", ") || "",
      endsAt: listingData.endsAt || "",
    });
  }, [listingData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setError("You must be logged in to update a listing.");
      return;
    }

    try {
      // Prepare data for submission
      const submitData = {
        ...formData,
        media: formData.media.split(",").map((url) => url.trim()),
        tags: formData.tags.split(",").map((tag) => tag.trim()),
      };

      // Send data
      await updateListing(listingData.id, submitData, token);
      onUpdateSuccess(); // Callback for successful update
    } catch (err) {
      setError(err.message);
      console.error("Error updating listing:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        placeholder="Tags (comma-separated)"
      />
      <input
        name="media"
        type="url"
        value={formData.media}
        onChange={handleChange}
        placeholder="Media URL (comma-separated)"
        required
      />
      <input
        name="endsAt"
        type="datetime-local"
        value={formData.endsAt}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Listing</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default UpdateListingForm;
