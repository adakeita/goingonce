import { useEffect, useState } from "react";
import { fetchListings } from "../../lib/api";
import { filterImageListings, Pagination } from "../UtilComponents";
import SearchComponent from "../SearchComponent";
import ListingCard from "../ListingCard";
import "./displaylistings.css";

const DisplayListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMoreListings, setHasMoreListings] = useState(false);
  const limit = 18;
  const [searchTerm, setSearchTerm] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    const loadListings = async () => {
      setLoading(true);
      try {
        const fetchedListings = await fetchListings(
          limit,
          offset,
          true,
          tag,
        );
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
  }, [offset, tag]);

  const handleSearch = (tag) => {
    setTag(tag);
    setOffset(0);
  };

  if (loading) {
    return <div>Loading listings...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="listingpage-container">
      <div className="listingpage-content">
        <div className="listingsheader-container">
          <h1>Listings</h1>
          <SearchComponent onSearch={handleSearch} />
        </div>
        <div className="listings-wrapper">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
        <Pagination
          offset={offset}
          limit={limit}
          setOffset={setOffset}
          hasMore={hasMoreListings}
        />
      </div>
    </div>
  );
};

export default DisplayListings;
