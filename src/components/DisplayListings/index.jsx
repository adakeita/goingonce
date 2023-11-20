import { useEffect, useState } from "react";
import { fetchListings } from "../../lib/api";

const DisplayListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadListings = async () => {
      setLoading(true);
      try {
        const fetchedListings = await fetchListings();
        setListings(fetchedListings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadListings();
  }, []);

  if (loading) {
    return <div>Loading listings...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {listings.map((listing) => (
        <div key={listing.id}>
          <h3>{listing.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default DisplayListings;
