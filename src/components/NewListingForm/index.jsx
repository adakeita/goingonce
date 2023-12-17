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

      // Modify the media to be an array
      const submitData = {
        ...formData,
        media: formData.media ? [formData.media] : [],
        tags: formData.tags
          ? formData.tags.split(",").map((tag) => tag.trim())
          : [], // Convert tags to array
      };

      // Send data to the API
      const response = await CreateListing(submitData, token);
      // Handle success
      
      console.log("Listing created:", response); // Log the response for confirmation
      setFormData({
        title: "",
        description: "",
        tags: "",
        media: "",
        endsAt: "",
      }); // Clear

    } catch (err) {
      setError(err.message);
      console.error("Error submitting form:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className="newlisting-inputfield newlisting-title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required // required
      />
      <textarea
      className="newlisting-inputfield newlisting-description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required // required
      />
      <input
      className="newlisting-inputfield newlisting-tags"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        placeholder="Tags (comma-separated)"
      />
      <input
      className="newlisting-inputfield newlisting-media"
        name="media"
        type="url"
        value={formData.media}
        onChange={handleChange}
        placeholder="Media URL"
        required // required
      />
      <input
      className="newlisting-inputfield newlisting-endsat"
        name="endsAt"
        type="datetime-local"
        value={formData.endsAt}
        onChange={handleChange}
        required //required
      />
      <button className="create-listing-btn" type="submit">Create Listing</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default NewListingForm;
