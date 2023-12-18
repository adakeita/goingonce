import { useEffect, useState } from "react";
import { fetchSingleListing } from "../../lib/api";
import SingleListingCard from "../SingleListingCard";
import SingleListingSkeleton from "../SingleListingSkeleton";

const DisplaySingleListing = ({ listingId }) => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

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
  }, [listingId, refreshTrigger]);

  if (loading) {
    return <SingleListingSkeleton />;
  }

  if (error) {
    return <p>Error loading listing: {error}</p>;
  }

  return (
    <div className="singlelisting-display">
      {listing ? (
        <>
          <SingleListingCard
            listing={listing}
            onBidSuccess={() => setRefreshTrigger((prev) => !prev)}
          />
        </>
      ) : (
        <p>Listing not found.</p>
      )}
    </div>
  );
};

export default DisplaySingleListing;
