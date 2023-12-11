import { useEffect, useState } from "react";
import { fetchUserListings } from "../../lib/api";
import UserBidCard from "../UserBidCard";

const UserBidsDisplay = ({ userName, token }) => {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserBids = async () => {
      setLoading(true);
      try {
        const userListings = await fetchUserListings(userName, token);
        console.log("Fetched listings with bids:", userListings);
        const userBids = userListings.reduce((acc, listing) => {
          listing.bids.forEach((bid) => {
            if (bid.bidderName === userName) {
              acc.push({
                bidId: bid.id,
                amount: bid.amount,
                created: bid.created,
                listingTitle: listing.title,
                listingMedia: listing.media[0],
                highestBid: Math.max(...listing.bids.map((b) => b.amount)),
              });
            }
          });
          return acc;
        }, []);
        setBids(userBids);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUserBids();
  }, [userName, token]);

  if (loading) return <div>Loading your bids...</div>;
  if (error) return <div>Error: {error}</div>;
  if (bids.length === 0) {
    return <p>You have not placed any bids yet.</p>;
  }

  return (
    <div className="user-bids-container">
      <h1 className="your-bids-header">Your Bids</h1>
      <div className="user-bids-content">
        {bids.map((bid) => (
          <UserBidCard key={bid.bidId} bid={bid} />
        ))}
      </div>
    </div>
  );
};

export default UserBidsDisplay;
