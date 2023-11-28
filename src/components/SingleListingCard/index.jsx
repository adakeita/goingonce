import "./singlelisting.css";
import BidCountdown from "../BidCountdown";

const SingleListingCard = ({ listing }) => {
  const highestBid = listing.bids?.reduce(
    (max, bid) => (bid.amount > max ? bid.amount : max),
    0
  );

  return (
    <div className="singlelisting-card">
      <div className="singlelisting-content">
        <div className="slisting-img-wrapper">
          <img
            className="slisting-img"
            src={listing.media[0]}
            alt={listing.title}
          />
        </div>
        <div className="slisting-info-wrapper">
          <div className="slisting-title-seller-bids">
            <h1 className="slisting-title">{listing.title}</h1>
            <div className="seller-create-bids-wrapper">
              <div className="seller-create-wrapper">
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
            <p>{listing.description}</p>
          </div>
          <div className="placebid-wrapper">
            <button className="placebid-btn">
                Bid on this!
            </button>
          </div>
          <BidCountdown endsAt={listing.endsAt} />
          <p>Ends: {new Date(listing.endsAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleListingCard;
