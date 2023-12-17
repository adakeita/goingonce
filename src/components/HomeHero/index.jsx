import { Link } from "@tanstack/react-router";
import "./hero.css";
import blobs from "../../assets/images/blobs.png";

const HomeHero = () => {
  return (
    <>
      <main className="hero-container">
        <section className="hero-section">
          <div className="hero-main-content">
            <div className="hero-text-btn-wrapper">
              <div className="hero-text">
                <h1 className="hero-tagline">
                  A world where style meets sustainability, and every item finds
                  a second life.
                </h1>
                <div className="hero-about">
                  <p className="hero-subtext">
                    Welcome to a pioneering platform where sustainable shopping
                    and circular economy converge. As a new member of our
                    eco-conscious community, you'll be greeted with 1000
                    credits, setting you off on an exciting journey of thrifting
                    and swapping
                  </p>
                </div>
              </div>
              <div className="hero-signup-wrapper">
                <p className="hero-signup-txt">
                  Sign up now and get 1000 credits!
                </p>
                <div className="hero-signup-btn-wrapper">
                  <Link to="/register" className="hero-signup-btn-link">
                  <button className="hero-signup-btn">I'm in!</button>
                  </Link>

                </div>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img className="hero-blobs" src={blobs} alt="blobs" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeHero;
