import { Link } from "@tanstack/react-router";
import BidCountdown from "../BidCountdown";
import "./listingcard.css";

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listing?listingId=${listing.id}`} className="listing-card-link">
      <div className="listing-card">
        <div className="listingcard-content">
          <div className="listing-title">
            <h3>{listing.title}</h3>
          </div>
          <div className="baseinfo-wrapper">
            <div className="seller-wrapper">
              <p className="seller-p"> Seller:</p>
              <p className="seller-p">{listing.seller?.name}</p>
            </div>
            <div className="creation-wrapper">
              <p className="creation-p">Created:</p>
              <p className="creation-p">
                {new Date(listing.created).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="listing-img-wrapper">
            <img
              src={listing.media[0]}
              alt={listing.title}
              className="listing-img"
            />
          </div>
          <div className="bid-container">
            <p>Bids: {listing._count.bids}</p>
          </div>
          <div className="listings-countdown">
            <BidCountdown endsAt={listing.endsAt} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
