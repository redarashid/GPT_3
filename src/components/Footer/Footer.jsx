
import "./Footer.css";

const footerColumns = [
  {
    title: "Links",
    items: ["Overons", "Social Media", "Counters", "Contact"],
  },
  {
    title: "Company",
    items: ["Terms & Conditions", "Privacy Policy", "Contact"],
  },
];

export default function Footer() {
  return (
    <section className="gpt3-footer">
      <div className="gpt3-cta">
        <h1 className="gradient-text">
          Do you want to step in to the
          <br />
          future before others
        </h1>

        <button type="button">Request Early Access</button>
      </div>

      <div className="gpt3-footer__links">
        <div className="gpt3-footer__logo">
          <h2>GPT-3</h2>
          <p>
            Crechterwoord K12 182 DK
            <br />
            Alknjkcb, All Rights Reserved
          </p>
        </div>

        {footerColumns.map((col) => (
          <div className="gpt3-footer__col" key={col.title}>
            <h4>{col.title}</h4>
            {col.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}

        <div className="gpt3-footer__col">
          <h4>Get in touch</h4>
          <p>
            Crechterwoord K12
            <br />
            182 DK Alknjkcb
          </p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <p className="gpt3-footer__copy">
        © 2026 GPT-3. All rights reserved.
      </p>
    </section>
  );
}
