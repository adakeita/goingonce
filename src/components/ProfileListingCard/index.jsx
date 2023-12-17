import { Link } from "@tanstack/react-router";
import ListingMenuBtn from "../ListingMenuBtn";
import "./profilelistingcard.css";

const ProfileListingCard = ({ listing, token, setShouldRefresh }) => {

  const highestBid = listing.bids?.reduce(
    (max, bid) => (bid.amount > max ? bid.amount : max),
    0
  );

  const initialListingData = { ...listing };

  return (
    <div className="profile-listingcard">
      <div className="profilelisting-header">
        <h3 className="profilelisting-title">{listing.title}</h3>
        <ListingMenuBtn
          listingId={listing.id}
          token={token}
          initialListingData={initialListingData}
          setShouldRefresh={setShouldRefresh}
        />
      </div>
      <Link
        to={`/listing?listingId=${listing.id}`}
        className="profile-listingcard-link"
      >
        <div className="profilelisting-img-container">
          <img
            src={listing.media[0]}
            alt={listing.title}
            className="profilelisting-img"
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
