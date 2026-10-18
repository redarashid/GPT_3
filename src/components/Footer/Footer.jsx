import "./GPT3Sections.css";

/* Put your images in /public/images and keep these names (or change them here).
   If an image is missing, a blue gradient is shown instead. */
const posts = [
  { id: 1, img: "blog1", date: "Sep 26, 2021", title: "GPT-3 and Open  AI is the future. Let us exlore how it is?" },
  { id: 2, img: "blog2", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us exlore how it is?" },
  { id: 3, img: "blog3", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us exlore how it is?" },
  { id: 4, img: "blog4", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us exlore how it is?" },
  { id: 5, img: "blog5", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us exlore how it is?" },
];

const footerColumns = [
  { title: "Links", items: ["Overons", "Social Media", "Counters", "Contact"] },
  { title: "Company", items: ["Terms & Conditions", "Privacy Policy", "Contact"] },
];

function Article({ post, featured = false }) {
  return (
    <article className={`gpt3-article ${featured ? "gpt3-article--featured" : ""}`}>
      <div className={`gpt3-article__img ${post.img}`} />
      <div className="gpt3-article__content">
        <div>
          <p className="gpt3-article__date">{post.date}</p>
          <h3 className="gpt3-article__title">{post.title}</h3>
        </div>
        <p className="gpt3-article__link">Read Full Article</p>
      </div>
    </article>
  );
}

function Blog() {
  return (
    <section className="gpt3-blog">
      <h1 className="gradient-text gpt3-blog__heading">
        A lot is happening,
        <br />
        We are blogging about it.
      </h1>

      <div className="gpt3-blog__container">
        <div className="gpt3-blog__groupA">
          <Article post={posts[0]} featured />
        </div>
        <div className="gpt3-blog__groupB">
          {posts.slice(1).map((p) => (
            <Article key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="gpt3-footer">
      <div className="gpt3-cta">
        <h1 className="gradient-text">
          Do you want to step in to the future before others
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

      <p className="gpt3-footer__copy">© 2021 GPT-3. All rights reserved.</p>
    </section>
  );
}

export default function GPT3Sections() {
  return (
    <>
      <Blog />
      <Footer />
    </>
  );
}
