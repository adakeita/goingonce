import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import GetStartedCTA from "../components/GetStartedCTA";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <HomeHero />
        <HomeAbout />
        <GetStartedCTA />
      </div>
    </>
  );
};

export default HomePage;
