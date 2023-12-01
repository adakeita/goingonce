import { Link } from "@tanstack/react-router";
import "./profilelistingcard.css";

const ProfileListingCard = ({ listing, OnDelete }) => {
  const highestBid = listing.bids?.reduce(
    (max, bid) => (bid.amount > max ? bid.amount : max),
    0
  );

  return (
    <Link to={`/listing?listingId=${listing.id}`} className="listing-card-link">
      <div className="profile-listing-card">
        <h3 className="profile-listing-title">{listing.title}</h3>
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
        <div className="listing-actions">
          <button onClick={() => OnDelete(listing.id)}>Delete</button>
        </div>
      </div>
    </Link>
  );
};

export default ProfileListingCard;
