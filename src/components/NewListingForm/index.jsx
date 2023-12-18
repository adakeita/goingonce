import { useState } from "react";
import { CreateListing } from "../../lib/api";
import { toDisplayFormat } from "../UtilComponents";
import { toApiFormat } from "../UtilComponents";
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
  const [successMessage, setSuccessMessage] = useState("");

  const [endDate, setEndDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [endTime, setEndTime] = useState("17:00");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endsAtFormatted = `${endDate}T${endTime}:00.000Z`;

    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        setError("You must be logged in to create a listing.");
        return;
      }

      const submitData = {
        ...formData,
        media: formData.media ? [formData.media] : [],
        tags: formData.tags
          ? formData.tags.split(",").map((tag) => tag.trim())
          : [],
        endsAt: endsAtFormatted,
      };


      const response = await CreateListing(submitData, token);

      // Handle success
      setSuccessMessage("Listing created successfully.");
      setFormData({
        title: "",
        description: "",
        tags: "",
        media: "",
        endsAt: "",
      }); // Clear
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      setError(err.message);
      console.error("Error submitting form:", err);
    }
  };

  return (
    <form className="new-listingform" onSubmit={handleSubmit}>
      <h1 className="new-listing-header">Create new Listing</h1>
      <div className="new-listingform-content">
        <label htmlFor="title" className="visually-hidden">
          Title
        </label>
        <input
          className="newlisting-inputfield newlisting-title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title *required"
          required // required
        />
        <label htmlFor="media" className="visually-hidden">
          Media
        </label>
        <input
          className="newlisting-inputfield newlisting-media"
          name="media"
          type="url"
          value={formData.media}
          onChange={handleChange}
          placeholder="Media URL *required"
          required // required
        />
        <label htmlFor="description" className="visually-hidden">
          Description
        </label>
        <textarea
          className="newlisting-inputfield newlisting-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description *required"
          required // required
        />
        <label htmlFor="tags" className="visually-hidden">
          Tags
        </label>
        <input
          className="newlisting-inputfield newlisting-tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
        />
        <label htmlFor="endsAt" className="endsat-newlistingform">
          (*required) Auction Ends:
        </label>
        <input
          className="newlisting-inputfield newlisting-date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <input
          className="newlisting-inputfield newlisting-time"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
        <button className="create-listing-btn" type="submit">
          Create Listing
        </button>
      </div>
      <div className="message-display">
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default NewListingForm;
