import "./singlelisting.css";
import BidCountdown from "../BidCountdown";
import BidBtn from "../BidBtn";

const SingleListingCard = ({ listing, onBidSuccess }) => {
  const highestBid = listing.bids?.reduce(
    (max, bid) => (bid.amount > max ? bid.amount : max),
    0
  );

  return (
    <div className="singlelisting-card">
      <div className="singlelisting-content">
        <div className="singlelisting-img-wrapper">
          <img
            className="singlelisting-img"
            src={listing.media[0]}
            alt={listing.title}
          />
        </div>
        <div className="singlelisting-info-wrapper">
          <div className="singlelisting-title-seller-bids">
            <h1 className="singlelisting-title">{listing.title}</h1>
            <div className="seller-created-bids-wrapper">
              <div className="seller-created-wrapper">
                <p>Seller: {listing.seller?.name}</p>
                <p>Created: {new Date(listing.created).toLocaleDateString()}</p>
              </div>
              <div className="bid-info-wrapper">
                <p>Bids: {listing._count.bids}</p>
                <p>Highest Bid: ${highestBid}</p>
              </div>
            </div>
          </div>
          <div className="description-wrapper">
            <h3>Description</h3>
            <p className="item-description">
            {listing.description ? listing.description : "No description provided"}</p>
            <BidCountdown endsAt={listing.endsAt} />
          </div>
          <div className="placebid-wrapper">
            <BidBtn listingId={listing.id} onBidSuccess={onBidSuccess} />
          </div>
          <p className="singlelisting-end">End date: {new Date(listing.endsAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleListingCard;
