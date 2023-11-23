import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <HomeHero />
        <HomeAbout />
      </div>
    </>
  );
};

export default HomePage;
