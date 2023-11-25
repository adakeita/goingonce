import { useState } from "react";
import { CreateListing } from "../../lib/api";
import "./listingform.css";

const NewListingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    media: "",
    endsAt: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        setError("You must be logged in to create a listing.");
        return;
      }

      // Modify the media field to be an array if it is not empty
      const submitData = {
        ...formData,
        media: formData.media ? [formData.media] : [],
        tags: formData.tags
          ? formData.tags.split(",").map((tag) => tag.trim())
          : [], // Convert tags to an array
      };

      // Send the modified data to the API
      const response = await CreateListing(submitData, token);
      // Handle success - e.g., clear form, show confirmation message, etc.
      console.log("Listing created:", response); // Log the response for confirmation
      setFormData({
        title: "",
        description: "",
        tags: "",
        media: "",
        endsAt: "",
      }); // Clear the form
    } catch (err) {
      setError(err.message);
      console.error("Error submitting form:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required // Title is required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required // Description is required
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
        placeholder="Media URL"
        required // Media URL is required
      />
      <input
        name="endsAt"
        type="datetime-local"
        value={formData.endsAt}
        onChange={handleChange}
        required // End date is required
      />
      <button type="submit">Create Listing</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default NewListingForm;
