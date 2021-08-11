import "./ThirdSection.css";
import { Testimonials } from "./Testimonials";

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="third-section-wrapper">
        <h1>CLIENT TESTIMONIALS</h1>
        <div className="testimonials-wrapper">
          {Testimonials.map((item, index) => {
            return (
              <div className="testimonial" key={index}>
                <img
                  src={require(`../../images/${item.image}`).default}
                  alt="Client"
                />
                <p>{item.testimonial}</p>
                <h1>{item.name}</h1>
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
