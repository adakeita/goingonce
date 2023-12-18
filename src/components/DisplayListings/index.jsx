import { useEffect, useState } from "react";
import { fetchListings } from "../../lib/api";
import { filterImageListings, Pagination } from "../UtilComponents";
import SearchComponent from "../SearchComponent";
import ListingCard from "../ListingCard";
import ListingsSkeleton from "../ListingsSkeleton";
import "./displaylistings.css";

const DisplayListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMoreListings, setHasMoreListings] = useState(false);
  const limit = 18;
  const [tag, setTag] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    const loadListings = async () => {
      setLoading(true);
      try {
        const fetchedListings = await fetchListings(limit, offset, true, tag);
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
    setSearchPerformed(true);
  };

  const handleReloadClick = () => {
    window.location.reload();
  };

  if (loading) {
    return <ListingsSkeleton />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="listingpage-container">
      <div className="listingpage-content">
          <div className="listingsheader-container">
            <h1>Listings</h1>
            <div className="listingsearch-wrapper">
            <SearchComponent onSearch={handleSearch} />
            {searchPerformed && (
              <button className="view-default" onClick={handleReloadClick}>View All Listings</button>
            )}
          </div>
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
