import "./Footer.css";
import { Link } from "react-router-dom";
import { SocialMediaImg } from "./SocialMediaImg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <h1>sunnyside</h1>
        <div className="footer-links">
          <Link to="/about" className="page-link">
            About
          </Link>
          <Link to="/services" className="page-link">
            Services
          </Link>
          <Link to="/projects" className="page-link">
            Projects
          </Link>
        </div>
        <div className="social-media-wrapper">
          {SocialMediaImg.map((item, index) => {
            return (
              <div className="social-media-links" key={index}>
                <a href={item.url}>
                  <img
                    src={require(`../../images/${item.image}`).default}
                    alt={item.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
