import "./Hero.css";
import heroImg from "../../assets/hero.png";


function Hero({ imageUrl = heroImg }) {
  return (
    <>
    <section className="hr-hero">
      <div className="hr-hero-text">
        <h1>
          <span className="hr-title-line1">Let’s Build Something</span>
          <span className="hr-title-line1">amazing with GPT-3</span>
          <span className="hr-title-line2">OpenAI</span>
        </h1>

        <p className="hr-hero-desc">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="hr-email-box">
          <input type="email" placeholder="Your Email Address" />
          <button className="hr-btn">Get Started</button>
        </div>

        <div className="hr-people">
          <div className="hr-avatars">
            <span className="hr-avatar hr-a1"></span>
            <span className="hr-avatar hr-a2"></span>
            <span className="hr-avatar hr-a3"></span>
            <span className="hr-avatar hr-a4"></span>
            <span className="hr-avatar hr-a5"></span>
            <span className="hr-avatar hr-a6"></span>
            <span className="hr-avatar hr-count">1.6k+</span>
          </div>
          <small>1,600 people requested access a visit in last 24 hours</small>
        </div>
      </div>

      <div className="hr-hero-image">
        <span className="hr-corner hr-top-left"></span>
        <span className="hr-corner hr-top-right"></span>
        <span className="hr-corner hr-bottom-left"></span>
        <span className="hr-corner hr-bottom-right"></span>
        <img src={imageUrl} alt="GPT-3" />
      </div>
    </section>

    <div className="hr-logos">
      <span>Google</span>
      <span className="hr-slack">slack</span>
      <span>Atlassian</span>
      <span>Dropbox</span>
      <span className="hr-shopify">shopify</span>
    </div>
    </>
  );
}

export default Hero;
