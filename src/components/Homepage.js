import "./Homepage.css";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Homepage;
