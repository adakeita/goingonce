import { useEffect, useState } from "react";
import { fetchListings } from "../../lib/api";
import { filterImageListings, Pagination } from "../UtilComponents";
import ListingCard from "../ListingCard";

const DisplayListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMoreListings, setHasMoreListings] = useState(false);
  const limit = 20;

  useEffect(() => {
    const loadListings = async () => {
      setLoading(true);
      try {
        const fetchedListings = await fetchListings(limit, offset);
        const filteredListings = filterImageListings(fetchedListings);
        setListings(filteredListings);
        setHasMoreListings(fetchedListings.length === limit);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadListings();
  }, [offset]); // Re-fetch when offset changes

  if (loading) {
    return <div>Loading listings...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
      <Pagination
        offset={offset}
        limit={limit}
        setOffset={setOffset}
        hasMore={hasMoreListings}
      />
    </div>
  );
};

export default DisplayListings;
