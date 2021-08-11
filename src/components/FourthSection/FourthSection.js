/* 
  Renders the Fourth Section of the Homepage component.
  This component consumes the "DisplayedImages" object, which describes the image's file name and alt attribute.
*/

import "./FourthSection.css";
import { DisplayedImages } from "./DisplayedImages";

const FourthSection = () => {
  return (
    <section className="fourth-section">
      <div className="fourth-section-wrapper">
        {DisplayedImages.map((item, index) => {
          return (
            <div className="image-wrapper" key={index}>
              <img
                src={require(`../../images/desktop/${item.image}`).default}
                alt={item.alt}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FourthSection;
