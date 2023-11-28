import HowCard from "../HowCards";
import "./howsection.css";

const HowSection = () => {
  return (
    <>
      <main className="how-section" id="howSection">
        <div className="how-section-content">
          <div className="how-wrapper">
            <HowCard
              title="Explore"
              info="Browse through a diverse range of pre-loved items, each with its
                unique history and charm."
            />
            <HowCard
              title="Bid"
              info="Use your credits to bid on items you love. Our platform offers
        an exciting array of choices."
            />
            <HowCard
              title="List"
              info="                items you no longer need? List them for auction! Declutter
                responsibly while earning credits."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HowSection;
