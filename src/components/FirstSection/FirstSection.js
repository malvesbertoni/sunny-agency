/* 
  Renders the First Section of the Homepage component.
  This component also renders the Navigation Bar that is displayed in this section.
*/

import "./FirstSection.css";
import NavBar from "../NavBar/NavBar";
import arrowDown from "../../images/icon-arrow-down.svg";

const FirstSection = () => {
  return (
    <section className="first-section">
      <div className="first-section-wrapper">
        <NavBar />
        <h1>WE ARE CREATIVE</h1>
        <img src={arrowDown} alt="Arrow down" />
      </div>
    </section>
  );
};

export default FirstSection;
