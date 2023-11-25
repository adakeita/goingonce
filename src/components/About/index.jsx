import aboutimg from "../../assets/images/lessnew.png";
import "./about.css";

const About = () => {
  return (
    <>
      <main className="about-section" id="aboutUs">
        <div className="aboutus-wrapper">
          <div className="about-img-wrapper">
            <img src={aboutimg} alt="" className="about-img" />
          </div>
          <div className="about-text-wrapper">
            <h2 className="about-tagline">
              Here, every bid and auction is more than just a transaction. It's
              a step towards a greener future.
            </h2>
            <p className="about-text">
              Our marketplace celebrates the charm of pre-loved items,
              encouraging you to reduce waste and cherish the unique stories
              behind each piece. As you bid, sell, and swap, you're not just
              participating in a marketplace; you're contributing to a movement.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
