const UserBidCard = ({ bid }) => {
  console.log("Rendering bid:", bid);
  return (
    <div className="user-bid-card">
      <h3>{bid.listingTitle}</h3>
      <img src={bid.listingMedia} alt={bid.listingTitle} />
      <p>Your Bid: {bid.amount}</p>
      <p>Highest Bid on Item: {bid.highestBid}</p>
      {/* Other bid details */}
    </div>
  );
};

export default UserBidCard;
