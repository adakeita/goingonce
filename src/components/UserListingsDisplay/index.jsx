import { useEffect, useState } from "react";
import { fetchUserListings } from "../../lib/api";
import ProfileListingCard from "../ProfileListingCard";

const UserListingsDisplay = ({ userName, token }) => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    loadUserListings();

    if (shouldRefresh) setShouldRefresh(false);
  }, [userName, token, shouldRefresh]);

  if (loading) return <div>Loading your listings...</div>;
  if (error) return <div>Error: {error}</div>;

  if (listings.length === 0) {
    return <p>You have no listings yet.</p>;
  }

  return (
    <div className="profile-listing-container">
      <div className="profile-listing-content">
        <h1 className="your-listing-header">Your Listings</h1>
        <div className="profile-listings-cards-container">
          {listings.map((listing) => (
            <div key={listing.id}>
              <ProfileListingCard
                listing={listing}
                token={token}
                setShouldRefresh={setShouldRefresh}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserListingsDisplay;
