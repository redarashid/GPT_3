import "../Features/Features.css";
import FeatureImg from "../../assets/Feature Image.png"

const features = [
  {
    title: "Improving end distrusts instantly",
    description:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    description:
      "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    description:
      "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    description:
      "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
  },
];
function Features() {
  return (
    <div className="features">
      <section className="features-container">
        <div className="features-heading">
          <h2 className="gradient-text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="features-list">
          {features.map((item, index) => (
            <div className="features-container__feature" key={index}>
              <div className="features-container__feature-title">
                <div className="gradient-bar" />
                <h3>{item.title}</h3>
              </div>
              <div className="features-container__feature-text">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="possibility">
        <div className="possibility-image">
          <img src={FeatureImg} alt="" />
        </div>
        <div className="possibility-content">
          <h4>Request Early Access to Get Started</h4>
          <h2 className="gradient-text">
            The possibilities are beyond your imagination
          </h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </section>
      <section className="cta">
        <div className="cta-content">
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
        <div className="cta-btn">
          <button type="button">Get Started</button>
        </div>
      </section>
    </div>
  );
}
export default Features;
