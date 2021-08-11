import "./Homepage.css";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Homepage;
