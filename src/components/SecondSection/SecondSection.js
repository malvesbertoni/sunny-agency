/* 
  Renders the Second Section of the Homepage component.
  It may be wise to refactor this code into different components that can be called or consuming an object to fill the info.
*/

import "./SecondSection.css";
import { Link } from "react-router-dom";
import imgEgg from "../../images/desktop/image-transform.jpg";
import imgCup from "../../images/desktop/image-stand-out.jpg";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="second-section-wrapper">
        {/* Classname of the divs will be "ss-something" 
            The "ss" is short for "second-section"  */}
        <div className="ss-information">
          <h1>
            Transform your
            <br /> brand
          </h1>
          <p>
            We are a full-service creative agency specializing in
            <br /> helping brands grow fast. Engage your clients through
            <br /> compelling visuals that do most of the marketing for you.
          </p>

          <Link to="/about" className="ss-text-transform">
            LEARN MORE
          </Link>
        </div>
        <div className="ss-full-image">
          <img src={imgEgg} alt="Egg" />
        </div>
        <div className="ss-full-image">
          <img src={imgCup} alt="Cup" />
        </div>
        <div className="ss-information stand-out">
          <h1>
            Stand out to the right
            <br /> audience
          </h1>
          <p>
            Using a collaborative formula of designers, researchers,
            <br />
            photographers, videographers, and copywriters, we'll
            <br /> build and extend your brand in digital places.
          </p>
          <Link to="/about" className="ss-text-stand-out">
            LEARN MORE
          </Link>
        </div>
        <div className="ss-image-info graphic-design">
          <div className="ss-image-info-subtitle">
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver
              <br /> artwork that underscores your brand message
              <br /> and captuers potential clients' attention.
            </p>
          </div>
        </div>
        <div className="ss-image-info photography">
          <div className="ss-image-info-subtitle">
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most
              <br /> stunning, high-quality photos that improve your
              <br /> business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
