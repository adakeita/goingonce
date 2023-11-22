import "./listingcard.css";

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <h3>{listing.title}</h3>
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
      <p>Ends At: {new Date(listing.endsAt).toLocaleDateString()}</p>
    </div>
  );
};

export default ListingCard;
