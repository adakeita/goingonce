import "./how.css";

const HowCard = ({ title, info }) => {
  return (
    <main className="how-card">
      <h3 className="how-title">{title}</h3>
      <div className="step-wrapper">
        <p className="step-info">{info}</p>
      </div>
    </main>
  );
};

export default HowCard;
