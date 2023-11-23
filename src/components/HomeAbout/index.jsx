import "./homeabout.css";

const HomeAbout = () => {
  return (
    <>
      <main className="how-section">
        <h2 className="how-header">How it works</h2>
        <div className="how-wrapper">
          <ul className="how-list">
            <li className="how-listitem">
              <p className="listitem-header">
                <strong>Sign Up: </strong>
              </p>
              <p className="listitem-text">
                Create an account. As a welcome gift, you'll receive 1000
                credits to get you started.
              </p>
            </li>

            <li className="how-listitem">
              <p className="listitem-header">
                <strong>Explore: </strong>
              </p>
              <p className="listitem-text">
                Browse through a diverse range of pre-loved items, each with its
                unique history and charm.
              </p>
            </li>
            <li className="how-listitem">
              <p className="listitem-header">
                <strong>Bid on items </strong>
              </p>
              <p className="listitem-text">
                Use your credits to bid on items you love. Our platform offers
                an exciting array of choices.
              </p>
            </li>
            <li className="how-listitem">
              <p className="listitem-header">
                <strong>List items </strong>
              </p>
              <p className="listitem-text">
                items you no longer need? List them for auction! Declutter
                responsibly while earning credits.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default HomeAbout;
