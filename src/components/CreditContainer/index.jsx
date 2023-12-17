const CreditContainer = ({ profile }) => {
  return (
    <div className="credit-container">
      <div className="current-credits-container">
        <p className="currentCredits">Credits</p>
        <p className="currentCreditsNumber">{profile.credits}</p>
      </div>
    </div>
  );
};

export default CreditContainer;
