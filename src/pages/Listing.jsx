import { useSearch } from "@tanstack/react-router";
import DisplaySingleListing from "../components/DisplaySingleListing";


const ListingPage = () => {
  const search = useSearch();
  const listingId = search.listingId;

  console.log("Retrieved Listing ID:", listingId);

  return (
    <div className="product-container">
      {listingId && <DisplaySingleListing listingId={listingId} />}
    </div>
  );
};

export default ListingPage;
