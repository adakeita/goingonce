import heroimage from "../../assets/images/sharemore.png";
import "./hero.css";

const HomeHero = () => {
  return (
    <>
      <main className="hero-container">
        <section className="hero-section">
          <div className="hero-text-wrapper">
            <h1 className="hero-header">Going Twice</h1>
            <br />
            <p className="hero-subtext">
              Welcome to a pioneering platform where sustainable shopping and
              circular economy converge. As a new member of our eco-conscious
              community, you'll be greeted with 1000 credits, setting you off on
              an exciting journey of thrifting and swapping. Here, every bid and
              auction is more than just a transaction it's a step towards a
              greener future.
            </p>
            <br />
            <p className="hero-subtext">
              Our marketplace celebrates the charm of pre-loved items,
              encouraging you to reduce waste and cherish the unique stories
              behind each piece. Dive into a world where style meets
              sustainability, and every item finds a second life. As you bid,
              sell, and swap, you're not just participating in a marketplace;
              you're contributing to a movement.
            </p>
          </div>
          <div className="hero-img-wrapper">
            <img src={heroimage} alt="" className="hero-img" />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeHero;
