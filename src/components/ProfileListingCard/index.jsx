import { Link } from "@tanstack/react-router";
import ListingMenuBtn from "../ListingMenuBtn";
import "./profilelistingcard.css";

const ProfileListingCard = ({ listing, token, setShouldRefresh }) => {
  console.log("Token in ProfileListingCard:", token);

  const highestBid = listing.bids?.reduce(
    (max, bid) => (bid.amount > max ? bid.amount : max),
    0
  );

  const initialListingData = { ...listing };

  return (
    <div className="profile-listing-card">
      <div className="profile-listing-header">
        <h3 className="profile-listing-title">{listing.title}</h3>
        <ListingMenuBtn
          listingId={listing.id}
          token={token}
          initialListingData={initialListingData}
          setShouldRefresh={setShouldRefresh}
        />
      </div>
      <Link
        to={`/listing?listingId=${listing.id}`}
        className="listing-card-link"
      >
        <div className="profile-listing-img-wrapper">
          <img
            src={listing.media[0]}
            alt={listing.title}
            className="listing-img"
          />
        </div>
        <div className="profile-bid-container">
          <div className="profile-bid-count">
            {" "}
            Bids:
            <p>{listing._count.bids}</p>
          </div>
          <div className="profile-highest-bid">
            Highest Bid:
            <p>{highestBid} Credits</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileListingCard;
