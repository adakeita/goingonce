import { useState } from "react";
import { placeBid } from "../../lib/api";
import "./bidform.css";

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
      setError(error.message + ", listing expired");
    }
  };

  return (
    <form className="bidform" onSubmit={handleSubmit}>
      <div className="bidform-content">
        <label htmlFor="bid-input" className="visually-hidden">
          Bid input
        </label>
        <input
          id="bid-input"
          className="bid-input"
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder="Enter your bid"
        />
        <button className="submit-bid-btn" type="submit">
          Place Bid
        </button>
      </div>
      {error && <p className="error bidding-error">{error}</p>}
    </form>
  );
};

export default BidForm;
