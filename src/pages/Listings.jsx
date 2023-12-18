import DisplayListings from "../components/DisplayListings";
import NewListingButton from "../components/NewListingButton";
import "../pagestyles/listings.css";

export default function ListingsPage() {
  return (
    <>
      <div className="page-container">
        <DisplayListings />
        <NewListingButton />
      </div>
    </>
  );
}
