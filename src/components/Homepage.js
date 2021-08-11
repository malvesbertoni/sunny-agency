/* 
  Homepage component renders all sections that compose the homepage.
  These components are divided into their corresponding design sections, hence their names.
*/

import "./Homepage.css";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import Footer from "./Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
};

export default Homepage;
