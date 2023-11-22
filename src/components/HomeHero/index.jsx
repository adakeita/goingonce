import heroimage from "../../assets/images/hero-test.png";
import "./hero.css";

const HomeHero = () => {
  return (
    <>
      <main className="hero-container">
        <section className="hero-section">
          <div className="hero-img-wrapper">
            <img src={heroimage} alt="" className="hero-img" />
          </div>
          <div className="hero-text-wrapper">
            <h1 className="hero-text">Find your dream home</h1>
            <p className="hero-subtext">Search for your next home today</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeHero;
