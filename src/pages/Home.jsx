import HomeHero from "../components/HomeHero";
import About from "../components/About";
import NewListingButton from "../components/NewListingButton";
import HowSection from "../components/HowSection";
import SignUpCta from "../components/SignUpCta";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <HomeHero />
        <About />
        <SignUpCta />
        <HowSection />
      </div>
    </>
  );
};

export default HomePage;
