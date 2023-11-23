import HowCard from "../HowCards";
import "./homeabout.css";

const HomeAbout = () => {
  return (
    <>
      <main className="how-section">
        <h2 className="how-header">How it works</h2>
        <div className="how-wrapper">
          <HowCard
            title="Sign Up"
            info="Create an account. As a welcome gift, you'll receive 1000 credits to get you started."
          />
          <HowCard
            title="Explore"
            info="Browse through a diverse range of pre-loved items, each with its
                unique history and charm."
          />
          <HowCard
            title="Bid on items"
            info="Use your credits to bid on items you love. Our platform offers
        an exciting array of choices."
          />
          <HowCard
            title="List items"
            info="                items you no longer need? List them for auction! Declutter
                responsibly while earning credits."
          />
        </div>
      </main>
    </>
  );
};

export default HomeAbout;
