const UserBidCard = ({ bid }) => {
  return (
    <div className="user-bid-card">
      <h3>{bid.listingTitle}</h3>
      <img src={bid.listingMedia} alt={bid.listingTitle} />
      <p>Your Bid: {bid.amount}</p>
      <p>Highest Bid on Item: {bid.highestBid}</p>
    </div>
  );
};

export default UserBidCard;
