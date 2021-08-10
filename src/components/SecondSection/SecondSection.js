import "./SecondSection.css";
import imgEgg from "../../images/desktop/image-transform.jpg";
import imgCup from "../../images/desktop/image-stand-out.jpg";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="second-section-wrapper">
        {/* Classname of the divs will be "ss-something" 
            The "ss" is short for "second-section"  */}
        <div className="ss-information">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h2>LEARN MORE</h2>
        </div>
        <div className="ss-full-image">
          <img src={imgEgg} alt="Egg" />
        </div>
        <div className="ss-full-image">
          <img src={imgCup} alt="Cup" />
        </div>
        <div className="ss-information">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <h2>LEARN MORE</h2>
        </div>
        <div className="ss-image-info">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captuers potential clients'
            attention.
          </p>
        </div>
        <div className="ss-image-info">
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
