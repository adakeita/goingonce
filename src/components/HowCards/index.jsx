import "./how.css";

const HowCard = ({ title, info }) => {
  return (
    <main className="how-card">
      <div className="howcard-content">
        <h3 className="how-title">{title}</h3>
        <div className="step-wrapper">
          <p className="step-info">{info}</p>
        </div>
      </div>
    </main>
  );
};

export default HowCard;
