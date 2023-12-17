import HomeHero from "../components/HomeHero";
import About from "../components/About";
import HowSection from "../components/HowSection";
import SignUpCta from "../components/SignUpCta";
import HomeListingsCta from "../components/HomeListingsCta";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <HomeHero />
        <About />
        <SignUpCta />
        <HowSection />
         <HomeListingsCta />
      </div>
    </>
  );
};

export default HomePage;
