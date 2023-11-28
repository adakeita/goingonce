import { useEffect, useState } from "react";
import { fetchSingleListing } from "../../lib/api";
import SingleListingCard from "../SingleListingCard";

const DisplaySingleListing = ({ listingId }) => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadListing = async () => {
      try {
        const fetchedListing = await fetchSingleListing(listingId);
        setListing(fetchedListing);
      } catch (err) {
        console.error("Error loading listing:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadListing();
  }, [listingId]);

  if (loading) {
    return <p>Loading listing...</p>;
  }

  if (error) {
    return <p>Error loading listing: {error}</p>;
  }

  return (
    <div className="singlelisting-display">
      {listing ? (
        <>
          <SingleListingCard listing={listing} />
        </>
      ) : (
        <p>Listing not found.</p>
      )}
    </div>
  );
};

export default DisplaySingleListing;
