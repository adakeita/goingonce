import { useEffect, useState } from "react";
import { fetchUserListings, deleteListing } from "../../lib/api";
import ProfileListingCard from "../ProfileListingCard";

const UserListingsDisplay = ({ userName, token }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserListings = async () => {
      setLoading(true);
      try {
        const userListings = await fetchUserListings(userName, token);
        setListings(userListings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUserListings();
  }, [userName, token]);

  const handleDelete = async (listingId) => {
    try {
      await deleteListing(listingId, token);
      setListings(listings.filter((listing) => listing.id !== listingId));
    } catch (err) {
      console.error("Error deleting listing:", err);
    }
  };

  if (loading) return <div>Loading your listings...</div>;
  if (error) return <div>Error: {error}</div>;

  if (listings.length === 0) {
    return <p>You have no listings yet.</p>;
  }

  return (
    <div className="profile-listing-container">
      <h1 className="your-listing-header">Your Listings</h1>
      <div className="profile-listings-content">
        {listings.map((listing) => (
          <div key={listing.id}>
            <ProfileListingCard listing={listing} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListingsDisplay;
