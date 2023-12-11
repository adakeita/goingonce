import { useState } from "react";
import { placeBid } from "../../lib/api";

const BidForm = ({ listingId, onBidSuccess }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("jwtToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!token) throw new Error("You must be logged in to bid");

      await placeBid(listingId, token, Number(bidAmount));
      onBidSuccess();
      setBidAmount("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        placeholder="Enter your bid"
      />
      <button type="submit">Place Bid</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default BidForm;
